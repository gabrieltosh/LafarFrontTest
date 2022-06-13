import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
    private proveedorService:ProveedorService
  ) { }

  ngOnInit(): void {
  }

  handleStoreProveedor(){
    this.proveedorService.storeProveedor(this.proveedor).subscribe(()=>{
      this.router.navigate(['/proveedores/list'])
    })
  }
}
