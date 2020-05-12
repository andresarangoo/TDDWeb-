import { TestBed } from '@angular/core/testing';

import { RomanosService } from './romanos.service';

describe('RomanosService', () => {
  let service: RomanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a converToRoman function', () => {
    expect(service.numberInRoman).toBeDefined();
  });

  it('converToRoman should be a function', () => {
    expect(service.numberInRoman).toBeInstanceOf(Function);
  });

  it('converToRoman should return a string', () => {
    expect(service.numberInRoman(1)).toBeInstanceOf(String);
  });

  it('should not convert 0 to roman number', () => {
    expect(service.numberInRoman(0)).toBeNull();
  });

  it('should not convert -1 to roman number', () => {
    expect(service.numberInRoman(-1)).toBeNull();
  });

  it('should not convert 1001 to roman number', () => {
    expect(service.numberInRoman(1001)).toBeNull();
  });

  it('should convert 2 to roman number', () => {
    expect(service.numberInRoman(2)).toEqual('II');
  });

  it('should convert 3 to roman number', () => {
    expect(service.numberInRoman(3)).toEqual('III');
  });

  it('should convert 4 to roman number', () => {
    expect(service.numberInRoman(4)).toEqual('IV');
  });

  it('should have a nums attribute', () => {
    expect(service.nums).toBeDefined();
  });

  it('nums should be an object', () => {
    expect(service.nums).toBeInstanceOf(Object);
  });

  it('should convert 9 to roman number', () => {
    expect(service.numberInRoman(9)).toEqual('IX');
  });

  it('should convert 40 to roman number', () => {
    expect(service.numberInRoman(40)).toEqual('XL');
  });

  it('should convert 90 to roman number', () => {
    expect(service.numberInRoman(90)).toEqual('XC');
  });

  it('should convert 400 to roman number', () => {
    expect(service.numberInRoman(400)).toEqual('CD');
  });

  it('should convert 900 to roman number', () => {
    expect(service.numberInRoman(900)).toEqual('CM');
  });

  it('should convert 101 to roman number', () => {
    expect(service.numberInRoman(101)).toEqual('CI');
  });

  it('should convert 115 to roman number', () => {
    expect(service.numberInRoman(115)).toEqual('CXV');
  });

  it('should convert 134 to roman number', () => {
    expect(service.numberInRoman(134)).toEqual('CXXXIV');
  });

  it('should convert 159 to roman number', () => {
    expect(service.numberInRoman(159)).toEqual('CLIX');
  });

  it('should convert 743 to roman number', () => {
    expect(service.numberInRoman(743)).toEqual('DCCXLIII');
  });

  it('should convert 876 to roman number', () => {
    expect(service.numberInRoman(876)).toEqual('DCCCLXXVI');
  });

  it('should convert 999 to roman number', () => {
    expect(service.numberInRoman(999)).toEqual('CMXCIX');
  });
});
