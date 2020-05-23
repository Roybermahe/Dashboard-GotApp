import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatTableModule, MatInputModule, MatPaginatorModule, MatCardModule, MatDialogModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatRadioModule, MatSnackBar, MatSnackBarModule } from "@angular/material";

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
        MatRadioModule,
        MatSnackBarModule
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
        MatRadioModule,
        MatSnackBarModule
    ]
})

export class MaterialModule {}