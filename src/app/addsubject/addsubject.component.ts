import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {
  form: FormGroup;
  title:string;
  msg:string;
  constructor(  private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddsubjectComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.title = data.title;
       this.msg=data.msg;
    }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.title, []],
      msg:[this.msg,[]]
      
  });
  }

  
  save() {
    console.log(this.form.value)
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
