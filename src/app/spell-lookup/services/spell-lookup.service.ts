import { Injectable } from '@angular/core';
import {
  HandleError,
  SpellLookupHttpErrorHandlerService
} from '@app/spell-lookup/services/spell-lookup-http-error-handler.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell, StandardActionTypes, Trait } from '@app/shared/app-interfaces-enums';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpellLookupService {
  traitsUrl = '/traits'; // URL to web api
  spellsUrl = '/spells'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: SpellLookupHttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('SpellLookupService');
  }

  getSpellById(spellId: string): Observable<Spell> {
    return this.http
      .get<Spell>(`${this.spellsUrl}/single`, {
        params: new HttpParams().set('spellId', spellId)
      })
      .pipe(catchError(this.handleError(`getSpell: id=${spellId}`, {} as Spell)));
  }

  getSpells(
    filterName: string = '',
    filterLevelMin: number = 0,
    filterLevelMax: number = 10,
    filterCastingTime: StandardActionTypes | string = '',
    filterTraits: Array<Trait> = [],
    sortOrder: string = 'asc',
    pageNumber: number = 0,
    pageSize: number = 50
  ): Observable<Array<Spell>> {
    return this.http
      .get<Array<Spell>>(`${this.spellsUrl}/list`, {
        params: new HttpParams()
          .set('filterName', filterName)
          .set('filterLevelMin', filterLevelMin.toString())
          .set('filterLevelMax', filterLevelMax.toString())
          .set('filterCastingTime', filterCastingTime)
          .set('filterTraits', filterTraits.join())
          .set('sortOrder', sortOrder)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
      })
      .pipe(catchError(this.handleError('getSpells', [])));
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
