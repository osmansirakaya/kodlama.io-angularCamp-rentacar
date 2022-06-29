import { RegisterComponent } from './components/pages/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './common/brand/addbrand/addbrand.component';
import { AddcarComponent } from './components/pages/addcar/addcar.component';
import { BrandupdateComponent } from './components/pages/brandupdate/brandupdate.component';
import { CarlistComponent } from './components/pages/carlist/carlist.component';
import { CarupdateComponent } from './components/pages/carupdate/carupdate.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginGuard } from './components/pages/login/login.guard';
import { RentComponent } from './components/pages/rent/rent.component';
import { PageBackGuard } from './components/pages/register/page-back.guard';
import { ContactComponent } from './components/pages/contact/contact.component';


const routes: Routes = [
  {path:"", component:CarlistComponent},
  {path:"addbrand",  component:AddbrandComponent},
   {path:"updatebrand/:id",  component:BrandupdateComponent},
   {path:"updatecar/:id",  component:CarupdateComponent},
   {path:"addcar",  component:AddcarComponent, canActivate:[LoginGuard]},
   {path:"cars/:id",  component:CarlistComponent},
  // {path:"cars/:id",  component:ColorlistComponent},
  {path:"rent/:id",  component:RentComponent},
  {path:"login",  component:LoginComponent, canDeactivate:[PageBackGuard]},
  { path: "contact", component: ContactComponent },
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
