import { Component } from '@angular/core';
import { RomanosService } from './romanos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  decimalNumber: number;
  result = '';
  constructor(private romanosService: RomanosService) {}

  onInputChange() {
    this.result = this.romanosService.numberInRoman(this.decimalNumber);
  }
}
