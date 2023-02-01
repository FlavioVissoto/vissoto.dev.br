import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';
import { Observable, map } from 'rxjs';

import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response/respose';
import { Sidebar } from '../interfaces/sidebar';

@Injectable({ providedIn: 'platform' })
export class SidebarServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/';

  getSidebar(): Observable<Sidebar[]> {
    return this.http.execute<Response<Sidebar[]>>(HttpMethod.Get, this.httpUrlBase + 'sidebar.json').pipe(
      map((value: Response<Sidebar[]>) => {
        return value.data;
      })
    );
  }
}
