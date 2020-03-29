import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';
import { ChangelogPageComponent } from './pages/changelog-page/changelog-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
    { path: '', component: FeaturesPageComponent },
    { path: 'todo', component: TodoPageComponent },
    { path: 'changelog', component: ChangelogPageComponent },
    { path: 'about', component: AboutPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
