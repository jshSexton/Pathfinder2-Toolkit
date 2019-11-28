import { Injectable } from '@angular/core';
import { StandardActionSymbols, StandardActionTypes } from '@app/shared/app-interfaces-enums';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  constructor() {}

  public getActionSymbol(action: StandardActionTypes | string) {
    switch (action) {
      case StandardActionTypes.FREE_ACTION:
        return StandardActionSymbols.FREE_ACTION;

      case StandardActionTypes.SINGLE_ACTION:
        return StandardActionSymbols.SINGLE_ACTION;

      case StandardActionTypes.DOUBLE_ACTION:
        return StandardActionSymbols.DOUBLE_ACTION;

      case StandardActionTypes.TRIPLE_ACTION:
        return StandardActionSymbols.TRIPLE_ACTION;

      case StandardActionTypes.REACTION_ACTION:
        return StandardActionSymbols.REACTION_ACTION;

      default:
        return StandardActionSymbols.NO_ACTION;
    }
  }

  public getActionText(action: StandardActionTypes, noEmptyStrings: boolean = false): string {
    let actionText: string;
    switch (action) {
      case StandardActionTypes.SINGLE_ACTION:
        actionText = '1 Action';
        break;
      case StandardActionTypes.DOUBLE_ACTION:
        actionText = '2 Actions';
        break;
      case StandardActionTypes.TRIPLE_ACTION:
        actionText = '3 Actions';
        break;
      case StandardActionTypes.REACTION_ACTION:
        actionText = 'Reaction';
        break;
      case StandardActionTypes.FREE_ACTION:
        actionText = 'Free Action';
        break;
      case StandardActionTypes.NO_ACTION:
      default:
        if (noEmptyStrings) {
          actionText = 'No Action Specified';
        } else {
          actionText = '';
        }
        break;
    }

    return actionText;
  }
}
