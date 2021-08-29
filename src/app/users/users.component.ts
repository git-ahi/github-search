import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { HttpClient } from "@angular/common/http";
// import { SearchService } from "../search-service/search.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;
  // searchService:SearchService;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    this.http.get<ApiResponse>("https://api.github.com/users/kwathuta").subscribe(data => {
      this.user = new User(data.avatar_url, data.login)
    })
  }

}
