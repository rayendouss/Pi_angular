import { Component, OnInit } from '@angular/core';
import { GetSubejctService } from '../get-subejct.service';
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
subject:any;

  constructor(private api:GetSubejctService) { }

  ngOnInit() {
    this.api.apiCall().subscribe((data)=>{
      console.log(data['hydra:member'])
    this.subject= data['hydra:member']
    })
 
  }
  

}
