import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-new-employee-component',
  templateUrl: './new-employee-component.component.html',
  styleUrls: ['./new-employee-component.component.css']
})
export class NewEmployeeComponentComponent implements OnInit {
  userValidations!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<NewEmployeeComponentComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) { }

  ngOnInit() {

    this.userValidations = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', ],
      username: ['', ],
      email: ['', ],
    });
  }

  createEmployee() {
    this.dialogRef.close(this.userValidations.value);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
