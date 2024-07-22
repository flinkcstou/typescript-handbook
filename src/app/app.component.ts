import { Component } from '@angular/core';
import { TypescriptEnum } from 'src/app/typescript-enum';
import { TyepscriptUnknownType } from 'src/app/tyepscript-unknown-type';
import { Leg } from 'src/app/typescript-type';

TypescriptEnum;
TyepscriptUnknownType;

class Asd implements Leg {
  left: string = '';
  right: string = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typescirpt-handbook';
}
