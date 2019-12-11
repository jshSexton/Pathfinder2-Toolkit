import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Feat, StandardActionTypes, Trait } from '@app/shared/app-interfaces-enums';
import {
  FeatLookupHttpErrorHandlerService,
  HandleError
} from '@app/feat-lookup/services/feat-lookup-http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FeatLookupService {
  traitsUrl = '/traits'; // URL to web api
  featsUrl = '/feats'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: FeatLookupHttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('FeatLookupService');
  }

  getFeatById(featId: string): Observable<Feat> {
    return this.http
      .get<Feat>(`${this.featsUrl}/single`, {
        params: new HttpParams().set('featId', featId)
      })
      .pipe(catchError(this.handleError(`getFeat: id=${featId}`, {} as Feat)));
  }

  getFeats(
    filterName: string = '',
    filterLevelMin: number = 1,
    filterLevelMax: number = 20,
    filterAction: StandardActionTypes | string = '',
    filterTraits: Array<Trait> = [],
    sortOrder: string = 'asc',
    pageNumber: number = 0,
    pageSize: number = 50
  ): Observable<Array<Feat>> {
    return this.http
      .get<Array<Feat>>(`${this.featsUrl}/list`, {
        params: new HttpParams()
          .set('filterName', filterName)
          .set('filterLevelMin', filterLevelMin.toString())
          .set('filterLevelMax', filterLevelMax.toString())
          .set('filterAction', filterAction)
          .set('filterTraits', filterTraits.join())
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      })
      .pipe(catchError(this.handleError('getFeats', [])));
  }

  getAllTraits(): Observable<Array<Trait>> {
    return this.http.get<Array<Trait>>(this.traitsUrl).pipe(catchError(this.handleError('getFeats', [])));
  }

  getTraitById(traitId: number): Observable<Trait> {
    return this.http
      .get<Trait>(`${this.traitsUrl}/${traitId}`)
      .pipe(catchError(this.handleError(`getFeat: id=${traitId}`, {} as Trait)));
  }
}
