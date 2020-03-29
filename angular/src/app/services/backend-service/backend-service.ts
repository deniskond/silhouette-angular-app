import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BackendService {
    constructor(protected httpClient: HttpClient) {}

    public post$<T>(url: string, postParams?: Record<string, string>): Observable<T> {
        return this.httpClient.post<T>(url, this.prepareHttpParams(postParams), { withCredentials: true });
    }

    private prepareHttpParams(params?: Record<string, string>): HttpParams {
        let httpParams = new HttpParams();

        if (params) {
            Object.keys(params).forEach((key: string) => (httpParams = httpParams.set(key, params[key])));
        }

        return httpParams;
    }
}
