import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ContactSchema } from 'src/models/contact.scheme';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
contact:ContactSchema={}
groups:any=[]
constructor(private edit:ActivatedRoute, private api:ApiService ,private nav:Router){

}

ngOnInit(): void {
  this.edit.params.subscribe((response:any)=>{
   const {id}=response
    console.log(id);

    this.api.view(id).subscribe({next:(response:any)=>{
       this.contact=response
       console.log(response);
       
    },error:(err:any)=>{

    }})


    })
  
        this.api.getgroups().subscribe((response:any)=>{
          this.groups=response
          console.log(response);
          
        })

  }


  update(id:any){
this.api.update(id,this.contact).subscribe((response:any)=>{
  this.nav.navigateByUrl('')
})
  }



}
