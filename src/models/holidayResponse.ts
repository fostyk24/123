export class HolidayResponse {
  date: Date;
  localName: string;
  name: string;
  countryCode: string;

  constructor(
    date: Date,
    localName: string,
    name: string,
    countryCode: string,
    ){
    this.date = date;
    this.localName = localName;
    this.name = name;
    this.countryCode = countryCode;
  }
} 
