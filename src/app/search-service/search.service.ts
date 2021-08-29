import { Injectable } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";
import { Repo } from '../repo'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private formRepo:string = ''
  user!: User;
  repo!: Repo[];
  private userName=''

  constructor(private http: HttpClient) {
    this.user = new User("", "");
  }

  userRequest(userName:string) {
    this.userName=userName
    console.log(this.userName);
    
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.userApi +this.userName + '?access_token='+ environment.accessToken).toPromise().then(response => {
        this.user.photo = response.avatar_url
        this.user.userName = response.login

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

  repoRequest(request:string) {
    this.formRepo = request
    return this.http.get(environment.repoApi + this.formRepo + '*')
}
}
