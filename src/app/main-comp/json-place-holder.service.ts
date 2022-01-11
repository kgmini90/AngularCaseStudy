import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceHolderService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://jsonplaceholder.cypress.io/";

  getData() : Observable<any> {
    return this.http.get(this.baseUrl+'users/');
  }

  addData(newUser: any) {
    return this.http.post(this.baseUrl+'users', newUser)
  }

  updateData(id: number, newUser: any) {
    return this.http.put(this.baseUrl+'users/'+id, newUser)
  }

  deleteData(id: number) {
    return this.http.delete(this.baseUrl+'users/'+id)
  }

}
