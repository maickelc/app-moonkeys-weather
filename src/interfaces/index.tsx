export interface CityWeather {
  id: string;
  name: string;
  favorite: boolean;
  weather: WeatherClass;
}

export interface WeatherClass {
  temperature: Temperature;
  summary: WeatherSummary;
}

export interface WeatherSummary {
  description: string;
}

export interface Temperature {
  actual: number;
  max: number;
  min: number;
}

export type UnitOption =  'celsius' | 'fahrenheit';
export type Unit = 'kelvin' | UnitOption

export type CardMode = 'list' | 'search';

export interface IQueryLazy {
  name: string,
}

export interface IUseCaseQuery {
  load: (name?: string) => void;
  loading: boolean;
  data: CityWeather[] | undefined;
}

export interface IConvertUnit {
  [key: string]: {[key: string]: (value: number) => number}
}
