import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbrandComponent } from './common/brand/addbrand/addbrand.component';
import { AddcarComponent } from './components/pages/addcar/addcar.component';
import { BrandupdateComponent } from './components/pages/brandupdate/brandupdate.component';
import { CarlistComponent } from './components/pages/carlist/carlist.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginGuard } from './components/pages/login/login.guard';


const routes: Routes = [
  {path:"", component:CarlistComponent},
  {path:"addbrand",  component:AddbrandComponent},
   {path:"updatebrand/:id",  component:BrandupdateComponent},
   {path:"addcar",  component:AddcarComponent, canActivate:[LoginGuard]},
   {path:"cars/:id",  component:CarlistComponent},
  // {path:"cars/:id",  component:ColorlistComponent},
  // {path:"rent/:id",  component:RentcarComponent},
  {path:"login",  component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
