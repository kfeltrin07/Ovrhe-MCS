import { Injectable } from '@angular/core';
import TranslationData from 'src/app/services/translation/translation.json';
import { GlobalVariablesService } from '../global-variables/global-variables.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public translationBase = TranslationData;
  //public translationBase: any;

  constructor(
    private globalVar: GlobalVariablesService
  ) {}

  public getTranslationByValue(value: string): any[] {

    if (this.translationBase != null) {
      return this.translationBase.translation.filter(
        function (data: any) {
          return data.ref == value
        }
      );
    } else {
      return [];
    }

  }

  public translate(key: string): string {
    if (this.getTranslationByValue(key).length == 0) {
      return key;
    } else {
      return this.getTranslationByValue(key)[0][this.globalVar.selectedLanguage];
    }
  }
}
