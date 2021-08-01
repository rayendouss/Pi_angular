import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetSubejctService } from '../get-subejct.service';
import { NgForm } from '@angular/forms';
import {formatDate} from '@angular/common';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  id: number;
  subjectname:string
  comments:any;
  comment:any;
  msg:string
  subject:any
  constructor(private router:Router,private route: ActivatedRoute,private api:GetSubejctService) { 
    
    class comnt{
      msg:string;
      createAt:Date;
      subjectId:string;
       }
       
  }
  
  ngOnInit() {
      
 
 
  
 
   console.log(this.subject)
    
    this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });

    this.api.getSubjectbyID(this.id).subscribe((data)=>{
      this.subject=data
    })
    this.api.getcomments().subscribe((data)=>{
      this.comments=data
     console.log(this.comments)
      this.comment=this.comments.filter(item => item.commande.id==this.id)
      console.log(this.comment)
    })

  }

onSubmit(data){
  
  data.subjectId=this.id
  data.createAt=formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'en');
  this.api.addComments(data).subscribe((data)=>{
    console.warn(data)
    window.location.reload();
  })
 
}
  onDelete(id){
    console.log(id)
    if (confirm('are you sure to delete ?')==true){
      this.api.deleteComments(id).subscribe((data)=>{
        console.warn(data)
        window.location.reload();
      })
    }
  }

}
