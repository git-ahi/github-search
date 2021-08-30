import { Component, Input, OnInit } from '@angular/core';
import { UserRepo } from 'src/app/user-repo';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.css']
})
export class UserRepoComponent implements OnInit {

@Input() repos:UserRepo[] =[]

  ngOnInit(): void {
  }

}
