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
  userRepos:any;
  result:string =''

  constructor(private searchService: SearchService) { }

  searchUser() {
    this.searchService.userRequest(this.result)
    this.user = this.searchService.user
  }

  searchUserRepo() {
    
    this.searchService.userRepoRequest(this.result).subscribe((userRepos)=>{
      this.userRepos=userRepos
    console.log(this.userRepos, "User Repos");

    })

    
  }
  ngOnInit() {
}
}
