import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';
import { MainCompComponent } from './main-comp/main-comp.component';
import { MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaintextComponent } from './main-comp/maintext/maintext.component';
import { EmployeemainComponent } from './main-comp/employeemain/employeemain.component';
import { HttpClientModule } from '@angular/common/http';
import { JsonPlaceHolderService } from './main-comp/json-place-holder.service';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NewEmployeeComponentComponent } from './main-comp/employeemain/NewEmployeeCreation/new-employee-component/new-employee-component.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateEmployeeCompComponent } from './main-comp/employeemain/update-employee-comp/update-employee-comp.component';
import {MatIconModule} from '@angular/material/icon'
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    MainCompComponent,
    MaintextComponent,
    EmployeemainComponent,
    NewEmployeeComponentComponent,
    UpdateEmployeeCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatChipsModule
  ],
  exports: [RouterModule,
    MatFormFieldModule],
  providers: [JsonPlaceHolderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
