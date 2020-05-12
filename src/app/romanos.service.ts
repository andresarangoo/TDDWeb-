import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RomanosService {
  nums = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  constructor() {}

  numberInRoman(decimalNumber: number): string {
    if (decimalNumber <= 0 || decimalNumber > 1000) {
      return null;
    }
    let result = '';
    let aNumber = decimalNumber;
    for (const numberKey in this.nums) {
      if (this.nums.hasOwnProperty(numberKey)) {
        while (aNumber >= this.nums[numberKey]) {
          result += numberKey;
          aNumber -= this.nums[numberKey];
        }
      }
    }
    return result;
  }
}
