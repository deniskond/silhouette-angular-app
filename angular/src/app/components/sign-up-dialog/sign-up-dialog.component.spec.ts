import { BackendService } from '../../services/backend-service/backend-service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpDialogComponent } from './sign-up-dialog.component';
import { instance, mock } from 'ts-mockito';
import { MatDialogRef } from '@angular/material/dialog';

describe('SignUpDialogComponent', () => {
    let component: SignUpDialogComponent;
    let fixture: ComponentFixture<SignUpDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpDialogComponent],
            providers: [
                { provide: BackendService, useFactory: () => instance(mock(BackendService)) },
                { provide: MatDialogRef, useFactory: () => instance(mock(MatDialogRef)) },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignUpDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
