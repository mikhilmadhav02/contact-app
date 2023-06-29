import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcontact',
  templateUrl: './allcontact.component.html',
  styleUrls: ['./allcontact.component.css']
})
export class AllcontactComponent implements OnInit{
allcontacts:any =[]
loading:boolean=true
errormsg:string=''
searchkey:any=''
  constructor(private api:ApiService, private nav:Router){

  }
ngOnInit(): void {
this.common()
}



// common function

common(){
  this.api.getallcontacts().subscribe({next:(result:any)=>{
    console.log(result);
   setTimeout(()=>{
      this.allcontacts= result
    this.loading=false},1000)
    
    
  },error:(error:any)=>{
    console.log(error.message);
    this.errormsg=error.message
    this.loading=false
    
  }
  }
  )
}

// deletecontact
deletecontact(id:any){
  this.api.delete(id).subscribe({next:(response:any)=>{
   this.common()
  },error:(err:any)=>{

  }})
}
}
  

