import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignInDialogComponent } from './components/sign-in-dialog/sign-in-dialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserActionButtonsComponent } from './components/user-action-buttons/user-action-buttons.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { ChangelogPageComponent } from './pages/changelog-page/changelog-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SignUpDialogComponent } from './components/sign-up-dialog/sign-up-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ANGULAR_MATERIAL_MODULES = [MatButtonModule, MatTabsModule, MatDialogModule, MatProgressSpinnerModule];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavigationComponent,
        UserActionButtonsComponent,
        FeaturesPageComponent,
        TodoPageComponent,
        ChangelogPageComponent,
        AboutPageComponent,
        SignInDialogComponent,
        SignUpDialogComponent,
    ],
    imports: [
        ...ANGULAR_MATERIAL_MODULES,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [SignUpDialogComponent, SignInDialogComponent],
})
export class AppModule {}
