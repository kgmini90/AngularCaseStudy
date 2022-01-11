import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee-comp',
  templateUrl: './update-employee-comp.component.html',
  styleUrls: ['./update-employee-comp.component.css']
})
export class UpdateEmployeeCompComponent implements OnInit {
  userValidations!: FormGroup;
  currentValue: any;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateEmployeeCompComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) { this.currentValue =  data.current;}

  ngOnInit() {

    this.userValidations = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', ],
      username: ['', ],
      email: ['', ],
    });
    this.userValidations.get('id')?.setValue(this.currentValue['id']);
    this.userValidations.get('name')?.setValue(this.currentValue['name']);
    this.userValidations.get('username')?.setValue(this.currentValue['username']);
    this.userValidations.get('email')?.setValue(this.currentValue['email']);

  }

  updateEmployee() {
    this.dialogRef.close(this.userValidations.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
