import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { ReposComponent } from "./repos/repos.component";
import { NavigationComponent } from "./navigation/navigation.component";

const routes: Routes = [
  { path: '', redirectTo: '/navigation', pathMatch: 'full' },
  {path: 'users', component: UsersComponent},
  {path: 'repos', component: ReposComponent},
  {path: 'navigation', component: NavigationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
