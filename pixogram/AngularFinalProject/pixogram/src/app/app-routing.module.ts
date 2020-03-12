import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/Account/sign-in/sign-in.component';
import { SingleMediaComponent } from './components/UploadMedia/single-media/single-media.component';
import { MultipleMediaComponent } from './components/UploadMedia/multiple-media/multiple-media.component';
import { RegisterComponent } from './components/Account/sign-in/register/register.component';
import { MyMediaComponent } from './components/my-media/my-media.component';
import { AccountsComponent } from './components/accounts/accounts.component';



const routes: Routes = [
  
    {path:"signIn",component:SignInComponent},
    {path:"register",component:RegisterComponent},
    {path:"single-media",component:SingleMediaComponent},
    {path:"multiple-media",component:MultipleMediaComponent},
    {path:"my-media",component:MyMediaComponent},
    {path:"accounts",component:AccountsComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
