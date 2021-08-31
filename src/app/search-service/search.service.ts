import { Injectable } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";
import { Repo } from '../repo'
import { UserRepo } from "../user-repo";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private formRepo:string = ''
  user!: User;
  repo!: Repo[];
  private userName='';
  userRepos:any;

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, 0, 0, "");
  }

  userRequest(userName:string) {
    this.userName=userName
    console.log(this.userName);
    
    interface ApiResponse {
      name: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos:number;
      bio: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' +this.userName).toPromise().then(response => {
        this.user.photo = response.avatar_url
        this.user.userName = response.name
        this.user.bio = response.bio
        this.user.followers = response.followers
        this.user.following = response.following
        this.user.repos = response.public_repos

        resolve(response)
      },
        error => {
          this.user.photo = "Avatar not found"
          this.user.userName = "Username not found"

          reject(error)
        })
    })
    return promise
  }

userRepoRequest(result:string){
  return this.http.get('https://api.github.com/users/' +result + '/repos')
}

  repoRequest(request:string) {
    this.formRepo = request
    return this.http.get(environment.repoApi + this.formRepo + '*')
}
}
