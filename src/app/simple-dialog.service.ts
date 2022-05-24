import {Inject, Injectable, InjectionToken, Type} from '@angular/core';

export const SIMPLE_DIALOG_DATA: InjectionToken<Record<any, any>> = new InjectionToken<Record<any, any>>('DATA', {
  providedIn: 'root', factory: () => ({})
});

@Injectable()
export class SimpleDialogService {
  constructor(@Inject(SIMPLE_DIALOG_DATA) private data: Record<any, any>) {}

  open(comp: Type<any>, data?: any): void {
    console.log(this.data);
    this.data = {
      ...this.data,
      [comp.name]: data
    };
    console.log(this.data)
  }
}
