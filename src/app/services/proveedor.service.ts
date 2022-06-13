import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Proveedor } from '../models/proveedor.model';
@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    private http:HttpClient
  ) { }

  getProveedores(){
    return this.http.get<Proveedor[]>('http://localhost:8000/api/proveedores')
  }

  getProveedor(id:number){
    return this.http.get<Proveedor>('http://localhost:8000/api/proveedor/'+id)
  }

  storeProveedor(proveedor:Proveedor){
    return this.http.post('http://localhost:8000/api/proveedor',proveedor)
  }

  updateProveedor(proveedor:Proveedor){
    return this.http.put('http://localhost:8000/api/proveedor',proveedor)
  }

  deleteProveedor(id:number){
    return this.http.delete('http://localhost:8000/api/proveedor/'+id)
  }
}
