import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { BrandComponent } from './common/brand/brand.component';
import { AddbrandComponent } from './common/brand/addbrand/addbrand.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorlistComponent } from './common/colorlist/colorlist.component';
import { CarlistComponent } from './components/pages/carlist/carlist.component';
import { BrandupdateComponent } from './components/pages/brandupdate/brandupdate.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AccountService } from './services/account.service';
import { LoginGuard } from './components/pages/login/login.guard';
import { AddcarComponent } from './components/pages/addcar/addcar.component';
import { CarupdateComponent } from './components/pages/carupdate/carupdate.component';
import { RentComponent } from './components/pages/rent/rent.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ColorlistComponent,
    BrandComponent,
    AddbrandComponent,
    CarlistComponent,
    BrandupdateComponent,
    LoginComponent,
    AddcarComponent,
    CarupdateComponent,
    RentComponent,
    RegisterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AccountService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { } 
