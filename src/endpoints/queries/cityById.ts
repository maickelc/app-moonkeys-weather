import { gql, useLazyQuery } from '@apollo/client';
import { CityWeather } from '../../interfaces/index';

interface IGetCityById {
  getCityById: CityWeather[];
}

export const GQL_CITY_BY_ID = gql`
  query cityById($ids: [String!]) {
    getCityById(id: $ids, config: { units: kelvin, lang: pt_br }) {
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

export const useQueryCityById = () => useLazyQuery<IGetCityById>(GQL_CITY_BY_ID);
