import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    constructor(private snackBar: MatSnackBar) {
    }

    public displayNotification(message: any, action: any): void {
        const config: MatSnackBarConfig = new MatSnackBarConfig();
        config.duration = 1000; //time in ms

        this.snackBar.open(message, action, config).afterDismissed().subscribe(() => {
             console.log('snackbar dismissed');
        });
    }
}