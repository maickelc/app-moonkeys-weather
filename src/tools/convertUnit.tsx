import { IConvertUnit } from '../interfaces/index';

const FAHRENHEIT_FREEZING_POINT = 32;
const KELVIN_FREEZING_POINT = 273.15;

const celsiusToFahrenheit = (celsius: number) => {
  const sum = (value: number) => value + FAHRENHEIT_FREEZING_POINT;
  const fahrenheit = (value: number) => sum(value * (9/5));

  return fahrenheit(celsius);
}

const kelvinToCelsius = (kelvin: number) => {
  const celcius = (value: number) => value - KELVIN_FREEZING_POINT;

  return celcius(kelvin);
}

const kelvinToFahrenheit = (kelvin: number) => {
  const celsius = kelvinToCelsius(kelvin);

  return celsiusToFahrenheit(celsius);
}

const fahrenheitToCelsius = (fahrenheit: number) => {
  const dec = (value: number) => value - FAHRENHEIT_FREEZING_POINT;
  const celsius = (value: number) => dec(value) * (5/9);

  return celsius(fahrenheit);
}

const convertUnit: IConvertUnit = {
  kelvin: {
    celsius: kelvinToCelsius,
    fahrenheit: kelvinToFahrenheit,
  },
  celsius: {
    fahrenheit: celsiusToFahrenheit,
  },
  fahrenheit: {
    celsius: fahrenheitToCelsius,
  }
};

export default convertUnit;
