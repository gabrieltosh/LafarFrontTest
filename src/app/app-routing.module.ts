import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/proveedor/list/list.component';
import { EditComponent } from './components/proveedor/edit/edit.component';
import { CreateComponent } from './components/proveedor/create/create.component';
const routes: Routes = [
  {path:'proveedores/list',component:ListComponent},
  {path:'proveedores/edit/:id',component:EditComponent},
  {path:'proveedores/create',component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
