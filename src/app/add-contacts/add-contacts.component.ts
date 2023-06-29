import { Component, OnInit } from '@angular/core';
import { ContactSchema } from 'src/models/contact.scheme';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent implements OnInit {
contact:ContactSchema={}
option:any=[]


constructor(private data:ApiService , private nav:Router){
  this.contact.groupId='select a option'
  }

ngOnInit(): void {
  this.data.getgroups().subscribe((response:any)=>{
    console.log(response);
    this.option=response
    
  })
}

addcontact(contact:ContactSchema){
  this.data.addcontact(contact).subscribe({next:(response:any)=>{
    console.log(response);
this.nav.navigateByUrl('')
    
  },error:(errmsg:any)=>{
    console.log(errmsg);
    
  }})
}
}