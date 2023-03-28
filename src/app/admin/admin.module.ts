import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
    {
      path: '',
      title: 'Admin log | Recipes',
      component: AdminComponent
    }
  ];

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class adminModule {

}