import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  proveedor:Proveedor={
    id:0,
    name:'',
    address:'',
    nit:0,
    phone:'',
    status:''
  }
  constructor(
    private router:Router,
    private proveedorService:ProveedorService,
    private routerActivate:ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.handleGetProveedor()
  }

  handleGetProveedor(){
    this.proveedorService.getProveedor(this.routerActivate.snapshot.params['id']).subscribe(data=>{
      this.proveedor=data
    })
  }
  handleUpdateProveedor(){
    this.proveedorService.updateProveedor(this.proveedor).subscribe(()=>{
      this.router.navigate(['/proveedores/list'])
    })
  }
}
