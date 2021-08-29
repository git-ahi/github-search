import { Component, OnInit } from '@angular/core';
import { User } from "../user";

import { SearchService } from "../search-service/search.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;

  result:string =''

  constructor(private searchService: SearchService) { }



  searchUser() {
    this.searchService.userRequest(this.result)
    this.user = this.searchService.user
  }

  ngOnInit() {
}
}
