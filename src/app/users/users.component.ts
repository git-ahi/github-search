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

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.userRequest()
    this.user = this.searchService.user
  }
}
