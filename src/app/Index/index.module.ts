import { NgModule } from "@angular/core";
import { indexComponent } from './index.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { indexRoutesModule } from './index.routing';
import { menuNav } from './menu.component';

@NgModule({
    declarations: [
        indexComponent,
        menuNav
    ],
    imports: [
        indexRoutesModule,
        CommonModule,
        FormsModule
    ],
    exports: [],
    bootstrap: [indexComponent]
})

export class indexModule {}