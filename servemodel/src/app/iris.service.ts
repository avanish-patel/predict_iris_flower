import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SVCParameters, SVCResult, Iris, Prediction } from './types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http/src/params';

// URL to do api calls
const URL : string = 'api/';


@Injectable({
  providedIn: 'root'
})
export class IrisService {

  constructor(private http: HttpClient) { }

  public trainModel(svcParameters: SVCParameters): Observable<SVCResult> {
    // return this.http.post(`${URL}train`, svcParameters).pipe(map( res => res as SVCResult));
    return this.http.post('http://localhost:8081/api/train', svcParameters).pipe(map( res => res as SVCResult));
  }

  public predictIris(iris: Iris): Observable<Prediction> {
    return this.http.post('http://localhost:8081/api/predict', iris).pipe(map( res => res as Prediction));
  }
}
