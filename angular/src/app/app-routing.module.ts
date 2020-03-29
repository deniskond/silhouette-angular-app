import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';

const routes: Routes = [{ path: '', component: FeaturesPageComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
