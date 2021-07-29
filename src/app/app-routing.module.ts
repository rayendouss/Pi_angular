import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { UsersListComponent } from './users-list/users-list.component';


const routes: Routes = [
  {path:'subject',component:SubjectListComponent},
  {path:'comment/:id',component:CommentListComponent},
  {path:'users',component:UsersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SubjectListComponent,CommentListComponent,UsersListComponent]
