import axios from "axios";
import { HolidayResponse } from "../models/holidayResponse";
const CURRENT_YEAR = new Date().getFullYear();
const UKRAINE_COUNTRY_CODE = 'UA'
const BASE_URL = `https://date.nager.at/api/v3/PublicHolidays/${CURRENT_YEAR}/${UKRAINE_COUNTRY_CODE}`;

export async function getPublicUkrainianHoildays() {
  try {
    const response = await axios.get(BASE_URL);
    const publicHolidays: HolidayResponse[] 
      = response.data.map((holiday: HolidayResponse) => (
        {
          date: new Date(holiday.date),
          name: holiday.name,
          localName: holiday.localName,
          countryCode: holiday.countryCode
        }
      )
    );

    return publicHolidays;
  } catch (error) {
    console.error('Error fetching public holidays:', error);
  }
}
