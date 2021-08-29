import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { SearchService } from "../search-service/search.service";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repo: Repo[] = [];
  repoName:string =''



  constructor(private searchService: SearchService) { }

  searchRepo()  {
    this.searchService.repoRequest(this.repoName).subscribe((response:any) => {
      this.repo = response.items;
      console.log(this.repo)
      
    })
  }

  ngOnInit(): void {
  }

}
