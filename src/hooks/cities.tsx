import { useCaseGetCityById } from '../usecase/index';

const useHookCities = () => {
  const { loading, load, data } = useCaseGetCityById();

  return {
    loading,
    cities: data,
    getCities: load,
  }
}

export default useHookCities;
