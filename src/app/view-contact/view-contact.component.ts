import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
viewdata:any={}
viewerror:string=''
response:any=''




  constructor(private viewapi:ApiService, private viewrouter:ActivatedRoute){

  }

  ngOnInit(): void {
    
    this.viewrouter.params.subscribe((data:any)=>{
      
      const {id}=data
      console.log(id);

    this.viewapi.view(id).subscribe({next:(response:any)=>{
      console.log(response);
     const {groupId}=response
     console.log(groupId);
     
      this.viewdata=response

      this.viewapi.group(groupId).subscribe((response:any)=>{
        console.log(response);
        const {name}= response
        this.response=name
        
      })
      
    },error:(errormessage:any)=>{
      console.log(errormessage);
      this.viewerror=errormessage
      
    }})

    
    })

    
  
  }



}
