import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {   path: 'front',
        loadChildren: 'app/features/front/foront.module'
    },
    {
        path: '**', redirectTo: 'front'
    }

];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ],
  declarations: [RouterModule]
})
export class AppRoutingModule { }
