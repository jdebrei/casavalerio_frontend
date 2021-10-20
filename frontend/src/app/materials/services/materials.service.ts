import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Material {
  id: string ,name: string, price: number
}

@Injectable()
export class MaterialsService {
  private get url(): string {
    return environment.apiUrl + '/materials';
  }

  constructor(private api: HttpClient) { }

  public getMaterials() {
    // GET http://localhost:3000/materials
    return this.api.get<Material[]>(`${this.url}`);
  }

  public getMaterialById(id: string) {
    // GET http://localhost:3000/materials/1
    return this.api.get<Material>(this.url + `/${id}`);
  }

  public createMaterial(data: any) {
    return this.api.post(`${this.url}`, {
      asd: '123'
    }, {

    })
  }
}
