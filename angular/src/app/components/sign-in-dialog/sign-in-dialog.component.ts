import { API } from '../../configs/api.config';
import { BackendService } from '../../services/backend-service/backend-service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInDialogComponent {
    public isLoading = false;
    public signInForm = new FormGroup(
        {
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            rememberMe: new FormControl(false, Validators.required),
        },
    );

    constructor(private dialogRef: MatDialogRef<SignInDialogComponent>, private backendService: BackendService) {}

    public onSignIn(): void {
        // TODO Set token from response
        // TODO Error handling
        this.backendService
            .post$(API.USER_ACTIONS.SIGNIN, this.signInForm.value)
            .subscribe(() => this.dialogRef.close());
    }
}
