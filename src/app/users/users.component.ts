import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { Repo } from '../repo';
import { SearchService } from "../search-service/search.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;
  repo: Repo[]=[];
  result ='Akan'

  constructor(private searchService: SearchService) { }

  searchRepo()  {
    this.searchService.repoRequest(this.result).subscribe((response:any) => {
      this.repo = response.items;
      console.log(this.repo)
      
    })
  }

  ngOnInit() {
    this.searchService.userRequest()
    this.user = this.searchService.user
    console.log(this.user);
    
  }
}
