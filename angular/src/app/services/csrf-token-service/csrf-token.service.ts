import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CsrfTokenService {
    private csrfToken: string;

    constructor(private httpClient: HttpClient) {}

    public getCsrfToken$(): Observable<string> {
        return this.csrfToken
            ? of(this.csrfToken)
            : this.httpClient.get('/getHtml', { responseType: 'text' }).pipe(
                  map((response: string) => response.match(/csrf-token-value=\'(.+?)\'/)[1]),
                  tap((csrfToken: string) => (this.csrfToken = csrfToken)),
              );
    }
}
