import { useCaseGetCityByName } from '../usecase/index';

const useHookCity = () => {
  const { loading, load, data } = useCaseGetCityByName();

  const getCity = (name: string) => {
    load(name);
  }

  return {
    loading,
    data,
    getCity,
  }
}

export default useHookCity;
