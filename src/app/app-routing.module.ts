import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CutomersComponent} from "./cutomers/cutomers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";

const routes: Routes = [
  {path:"customers",component:CutomersComponent},
  {path:"accounts",component:AccountsComponent},
  {path:"new-customer",component:NewCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
