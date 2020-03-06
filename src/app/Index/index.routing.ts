import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { indexComponent } from './index.component';


const routes: Routes = [
    { path: '', component: indexComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class indexRoutesModule {}