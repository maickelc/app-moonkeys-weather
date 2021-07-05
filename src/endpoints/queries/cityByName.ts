import { gql, useLazyQuery } from '@apollo/client';
import { CityWeather } from '../../interfaces/index';

interface IGetCityByName {
  getCityByName: CityWeather;
}

export const GQL_CITY_BY_NAME = gql`
  query cityByName($name: String!) {
    getCityByName(name: $name, config: { units: kelvin, lang: pt_br }) {
      id
      name
      weather {
        temperature {
          actual
          max
          min
        }
      }
    }
  }
`

export const useQueryCityByName = () => useLazyQuery<IGetCityByName>(GQL_CITY_BY_NAME);
