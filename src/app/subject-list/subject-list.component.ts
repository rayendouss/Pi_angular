import { Component, OnInit } from '@angular/core';
import { GetSubejctService } from '../get-subejct.service';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddsubjectComponent} from '../addsubject/addsubject.component'

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
subject:any;
msg:string;
title:string;
submitted:boolean
postfilter;
 dialogRef:any
  constructor(private api:GetSubejctService,private dialog: MatDialog) {
    class sujet{
      titre:string;
      msg:string;
       }
   }

  ngOnInit() {
    this.api.apiCall().subscribe((data)=>{
      console.log(data)
    this.subject= data
    })
 
  }



  openDialog() {
    console.log("here")
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      msg:'',
      title: ''
  };
     this.dialogRef = this.dialog.open(AddsubjectComponent, dialogConfig);

    this.dialogRef.afterClosed().subscribe(
        data => {console.log("Dialog output:", data)
        this.api.addsujet(data).subscribe((data)=>{
          console.log(data)
          window.location.reload();
      
        })
    }
        
    ); 
   

}

close() {
  this.dialogRef.close();
}


   addsubject:any = ()=>{
    // this.api.addsujet(data)
  }
  onSubmit(data){
  console.log(data)
  this.api.addsujet(data).subscribe((data)=>{
    console.log(data)
    window.location.reload();

  })
  // data.subjectId=this.id
    // data.createAt=formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'en');
    // this.api.addComments(data).subscribe((data)=>{
    //   console.warn(data)
    //   window.location.reload();
    // })
   
  }

  onDelete(id){
    console.log(id)
    if (confirm('are you sure to delete ?')==true){
      this.api.deleteSubject(id).subscribe((data)=>{
    
     
      },(err)=>{
       window.location.reload();
      })
    }
  }
  

}
