import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatCardModule, MatDialogModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatRadioModule } from "@angular/material";

@NgModule({
    imports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatRadioModule
    ],
    exports: [
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatDialogModule,
        MatButtonModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatStepperModule,
        MatRadioModule
    ]
})

export class MaterialModule {}