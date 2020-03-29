import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserActionButtonsComponent } from './user-action-buttons.component';
import { SignUpDialogComponent } from '../sign-up-dialog/sign-up-dialog.component';
import { MockComponents } from 'ng-mocks';
import { SignInDialogComponent } from '../sign-in-dialog/sign-in-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { mock, instance } from 'ts-mockito';

describe('UserActionButtonsComponent', () => {
    let component: UserActionButtonsComponent;
    let fixture: ComponentFixture<UserActionButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserActionButtonsComponent, MockComponents(SignUpDialogComponent, SignInDialogComponent)],
            providers: [{ provide: MatDialog, useFactory: () => instance(mock(MatDialog)) }],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserActionButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
