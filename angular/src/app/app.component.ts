import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    static MockComponents(HeaderComponent: typeof import("./components/header/header.component").HeaderComponent): any {
        throw new Error("Method not implemented.");
    }
}
