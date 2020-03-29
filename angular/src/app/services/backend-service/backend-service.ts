import { CsrfTokenService } from './../csrf-token-service/csrf-token.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(private httpClient: HttpClient, private csrfTokenService: CsrfTokenService) {}

    public post$<T>(url: string, postParams?: Record<string, string>): Observable<T> {
        return this.csrfTokenService.getCsrfToken$().pipe(
            switchMap((csrfToken: string) => this.httpClient.post<T>(url, this.prepareHttpRequestBody(postParams), {
                headers: {
                    'Csrf-Token': csrfToken,
                },
                withCredentials: true,
            })),
        );
    }

    private prepareHttpRequestBody(params?: Record<string, string>): HttpParams {
        let httpParams = new HttpParams();

        if (params) {
            Object.keys(params).forEach((key: string) => (httpParams = httpParams.set(key, params[key])));
        }

        return httpParams;
    }
}
