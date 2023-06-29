import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[],searchkey:string,propertyname:string): any[] {
    const result:any=[]
    const error:any='contact not found'
if(!allcontacts || searchkey=="" || propertyname==""){
return allcontacts
}else{
  allcontacts.forEach((item:any)=>{
    if(item[propertyname].trim().toLowerCase().includes(searchkey.trim().toLowerCase())){
      result.push(item)
    }else{
      
    }
    })
    
}

    return result;
  }

}
