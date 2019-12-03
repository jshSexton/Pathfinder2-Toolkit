import { Injectable } from '@angular/core';
import {
  HandleError,
  SpellLookupHttpErrorHandlerService
} from '@app/spell-lookup/services/spell-lookup-http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spell, Trait } from '@app/shared/app-interfaces-enums';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpellLookupService {
  traitsUrl = 'api/traits'; // URL to web api
  spellsUrl = 'api/spells'; // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: SpellLookupHttpErrorHandlerService) {
    this.handleError = httpErrorHandler.createHandleError('SpellLookupService');
  }

  getAllSpells(): Observable<Array<Spell>> {
    return this.http.get<Array<Spell>>(this.spellsUrl).pipe(catchError(this.handleError('getSpells', [])));
  }

  getSpellById(spellId: number): Observable<Spell> {
    return this.http
      .get<Spell>(`${this.spellsUrl}/${spellId}`)
      .pipe(catchError(this.handleError(`getSpell: id=${spellId}`, {} as Spell)));
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
