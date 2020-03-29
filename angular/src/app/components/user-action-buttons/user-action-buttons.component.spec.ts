import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserActionButtonsComponent } from './user-action-buttons.component';

describe('UserActionButtonsComponent', () => {
    let component: UserActionButtonsComponent;
    let fixture: ComponentFixture<UserActionButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserActionButtonsComponent],
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
