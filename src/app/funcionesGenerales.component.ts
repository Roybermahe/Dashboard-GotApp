import { MatSnackBar } from "@angular/material";

export function PushNotification(message: string, snakBar: MatSnackBar) {
    snakBar.open(message, 'cerrar', {
      duration: 2000,
    });      
}