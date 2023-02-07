import { HttpMethod, HttpRequestClientServices } from '@vissoto-angular/http-client';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolidColor } from '../../interfaces/styles/solid-color';
import { Response } from './../../interfaces/response/respose';

@Injectable({ providedIn: 'root' })
export class ButtonServices {
  constructor(private http: HttpRequestClientServices) {}

  private readonly httpUrlBase = 'assets/json/styles/';

  getSolidColors(): Observable<Response<SolidColor[]>> {
    return this.http.execute<Response<SolidColor[]>>(HttpMethod.Get, this.httpUrlBase + 'solid-colors.json');
  }
}
