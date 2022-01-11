import { JsonData } from './../model/JsonData';
import { Component, OnInit, ViewChild } from '@angular/core';
import { JsonPlaceHolderService } from '../json-place-holder.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { NewEmployeeComponentComponent } from './NewEmployeeCreation/new-employee-component/new-employee-component.component';
import { MatPaginator } from '@angular/material/paginator';
import { UpdateEmployeeCompComponent } from './update-employee-comp/update-employee-comp.component';

@Component({
  selector: 'app-employeemain',
  templateUrl: './employeemain.component.html',
  styleUrls: ['./employeemain.component.scss']
})
export class EmployeemainComponent implements OnInit {
  newData: any;
  constructor(private service: JsonPlaceHolderService,
  private dialog: MatDialog) { }


  jsonData: JsonData[] | undefined = [];


  displayedColumns = ['id', 'name', 'username', 'email', 'editColumn', 'deleteColumn'];
  //displayedColumns = ['id', 'name', 'username', 'email', 'editColumn'];
  dataSource  = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.service.getData().subscribe (
      (data: any) => {
        this.jsonData = data;
        this.dataSource = new MatTableDataSource(this.jsonData);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  addData () {
    let dialog = this.dialog.open(NewEmployeeComponentComponent, {
      width: '550px'
    });

    dialog.afterClosed().subscribe(
      result => {
        this.service.addData(result).subscribe(
          (data) => {
            this.jsonData?.push(Object.assign(data));
            this.dataSource = new MatTableDataSource(this.jsonData);
            this.dataSource.paginator = this.paginator;
          }
        );
      }
    );
  }

  editData (jsonData: any ) {
    let dialog = this.dialog.open(UpdateEmployeeCompComponent, {
      width: '550px',
      data: {current: jsonData}
    });

    dialog.afterClosed().subscribe(
      result => {
        jsonData.id = result.id;
        jsonData.name = result.name;
        jsonData.username = result.username;
        jsonData.email = result.email;
        this.service.updateData(jsonData.id, jsonData).subscribe(
          (data) => { }
        );
      }
    );
  }

  deleteData (jsonData: any ) {
    this.service.deleteData(jsonData.id).subscribe(
      (data) => {
        const tempSet = this.jsonData;
        tempSet?.forEach((data,i) => {
          if(data.id === jsonData.id) {
            tempSet.splice(i, 1);
          }
        })
        this.dataSource = new MatTableDataSource(tempSet);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

}
