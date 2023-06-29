import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcontactComponent } from './allcontact/allcontact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"" , component:AllcontactComponent},
  {path:"add-contact" , component:AddContactsComponent},
  {path:"view-contact/:id" , component:ViewContactComponent},
  {path:"edit-contact/:id" , component:EditContactComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
