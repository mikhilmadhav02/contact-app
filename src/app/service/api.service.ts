import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contact.scheme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl='https://contactapp-3sdc.onrender.com'
  constructor(private http:HttpClient) { }


 getallcontacts(){

 return this.http.get(`${this.baseurl}/contacts`)

}


view(id:any){
 return this.http.get(`${this.baseurl}/contacts/${id}`)
}

group(gid:any){
return this.http.get(`${this.baseurl}/groups/${gid}`)
}

// get all groups
getgroups(){
  return this.http.get(`${this.baseurl}/groups`)
}
// add contact

  addcontact(contact:ContactSchema){
return this.http.post(`${this.baseurl}/contacts`,contact)
  }

  // delete
  delete(id:any){
    return this.http.delete(`${this.baseurl}/contacts/${id}`)
  }
// update

update(id:any,contact:ContactSchema){
 return this.http.put(`${this.baseurl}/contacts/${id}`,contact)
}

}