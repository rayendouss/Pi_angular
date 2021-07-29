import { Component, OnInit } from '@angular/core';
import { GetSubejctService } from '../get-subejct.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:any;
  constructor(private api:GetSubejctService) { }

  ngOnInit() {
    this.api.getUsers().subscribe((data)=>{
      console.log(data['hydra:member'])
    this.users= data['hydra:member']
    })
  }
 
}
