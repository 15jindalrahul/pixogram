import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SingleMediaComponent } from './components/UploadMedia/single-media/single-media.component';
import { MultipleMediaComponent } from './components/UploadMedia/multiple-media/multiple-media.component';
import { MyMediaComponent } from './components/my-media/my-media.component';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ImageBarComponent } from './components/image-bar/image-bar.component';
import { FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/Account/sign-in/register/register.component';

import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountDetailComponent } from './components/Accounts/account-detail/account-detail.component';
import { ActivityLogComponent } from './components/Accounts/activity-log/activity-log.component';
import { BlockedUserComponent } from './components/Accounts/blocked-user/blocked-user.component';
import { SearchComponent } from './components/Accounts/search/search.component';
import { LogOutComponent } from './components/Accounts/log-out/log-out.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleMediaComponent,
    MultipleMediaComponent,
    MyMediaComponent,
    RegisterComponent,
    SideBarComponent,
    NavBarComponent,
    ImageBarComponent,

    AccountsComponent,
    AccountDetailComponent,
    ActivityLogComponent,
    BlockedUserComponent,
    SearchComponent,
    LogOutComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
