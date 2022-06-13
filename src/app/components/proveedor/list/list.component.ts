import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  proveedores:Proveedor[]=[]

  constructor(
    private router:Router,
    private proveedorService:ProveedorService
  ) { }

  ngOnInit(): void {
    this.handleGetProveedores()
  }

  handleGetProveedores(){
    this.proveedorService.getProveedores().subscribe(data=>{
      this.proveedores=data
    })
  }

  handleCreateProveedor(){
    this.router.navigate(['proveedores/create'])
  }

  handleEditProveedor(id:number){
    this.router.navigate(['proveedores/edit',id])
  }

  handeDeleteProveedor(id:number){
    if(confirm('Delete this element ?')){
      this.proveedorService.deleteProveedor(id).subscribe(()=>{
        this.handleGetProveedores()
      })
    }
  }
}
