import { Injectable } from '@angular/core';
import { HandleError, FeatLookupHttpErrorHandlerService } from './feat-lookup-http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feat, Trait } from '@app/shared/app-interfaces-enums';

@Injectable({
  providedIn: 'root'
})
export class FeatLookupService {
  traitsUrl = 'api/traits'; // URL to web api
  featsUrl = 'api/feats'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: FeatLookupHttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FeatLookupService');
  }

  getAllFeats(): Observable<Array<Feat>> {
    return this.http.get<Array<Feat>>(this.featsUrl).pipe(catchError(this.handleError('getFeats', [])));
  }

  getFeatById(featId: number): Observable<Feat> {
    return this.http
      .get<Feat>(`${this.featsUrl}/${featId}`)
      .pipe(catchError(this.handleError(`getFeat: id=${featId}`, <Feat>{})));
  }

  getAllTraits(): Observable<Array<Trait>> {
    return this.http.get<Array<Trait>>(this.traitsUrl).pipe(catchError(this.handleError('getFeats', [])));
  }

  getTraitById(traitId: number): Observable<Trait> {
    return this.http
      .get<Trait>(`${this.traitsUrl}/${traitId}`)
      .pipe(catchError(this.handleError(`getFeat: id=${traitId}`, <Trait>{})));
  }
}