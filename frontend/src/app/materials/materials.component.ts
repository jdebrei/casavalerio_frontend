import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MaterialsService } from './services/materials.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss'],
})
export class MaterialsComponent implements OnInit {
  materials: any[] = [];
  materials$ = this.materialsService.getMaterials();
  constructor(private materialsService: MaterialsService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.materialsService.getMaterials().pipe(
      first()
    ).subscribe({
      next: data => {
        this.materials = data
      }
    })
  }
  loadMaterials(): void {
    this.materialsService.getMaterials().pipe(
      first()
    ).subscribe({
      next: data => {
        this.materials = data
      }
    })
  }
}
