import { BackendService } from '../../services/backend-service/backend-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignInDialogComponent } from './sign-in-dialog.component';
import { instance, mock } from 'ts-mockito';
import { MatDialogRef } from '@angular/material/dialog';

describe('SignInDialogComponent', () => {
    let component: SignInDialogComponent;
    let fixture: ComponentFixture<SignInDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignInDialogComponent],
            providers: [
                { provide: BackendService, useFactory: () => instance(mock(BackendService)) },
                { provide: MatDialogRef, useFactory: () => instance(mock(MatDialogRef)) },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignInDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
