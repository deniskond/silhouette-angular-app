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

@NgModule({
    declarations: [AppComponent, HeaderComponent, NavigationComponent, UserActionButtonsComponent, FeaturesPageComponent, TodoPageComponent, ChangelogPageComponent, AboutPageComponent],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule, MatTabsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
