import { Injectable } from '@angular/core';
import { User } from '../user'
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  user: User;

  constructor(private http: HttpClient) {
    this.user = new User("", "");
  }

  userRequest() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(environment.api + 'kwathuta').toPromise().then(response => {
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
}
