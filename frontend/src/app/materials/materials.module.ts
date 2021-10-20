import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import { MaterialsService } from './services/materials.service';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [MaterialsComponent],
    imports: [ CommonModule, RouterModule.forChild([{
        path: '',
        component: MaterialsComponent
    }]),
    MatToolbarModule,
    MatButtonModule,
],
    exports: [],
    providers: [MaterialsService],
})
export class MaterialsModule {}