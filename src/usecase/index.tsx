import React, { useCallback, useEffect, useState } from 'react';
import { getData, storeData } from '../storage/index';
import { IUseCaseQuery, Temperature, Unit, CityWeather } from '../interfaces/index';
import { useQueryCityById } from '../endpoints/queries/cityById';
import { useQueryCityByName } from '../endpoints/queries/cityByName';
import convertUnit from '../tools/convertUnit';

export const useCaseGetCityById = (): IUseCaseQuery => {
  const [cities, setCities] = useState<CityWeather[]>([]);
  const [get, { loading, data }] = useQueryCityById();
  
  const setFavorites = (item: any) => {
    const city: CityWeather = {...item};
    city.favorite = true
    return city;
  }
  useEffect(() => {
    if (data) {
      const { getCityById: result } = data;
      if (result) {
        setCities(result.map(setFavorites));
      } else {
        setCities([]);
      }
    }
  }, [data]);

  const getCities = useCallback(async () => {
    const citiesOnDb = await getData();
    get({ variables: { ids: citiesOnDb } });
  }, [])

  return {
    load: getCities,
    loading,
    data: cities,
  }
}

export const useCaseGetCityByName = (): IUseCaseQuery => {
  const [city, setCity] = useState<CityWeather[] | undefined>();
  const [getCityQuery, { loading, data }] = useQueryCityByName();

  const updateCity = (ids: string[]) => {
    if (data) {
      const { getCityByName: item } = data;
      if (item) {
        const cityEntry: CityWeather = {...item}
        cityEntry.favorite = ids.includes(cityEntry.id);
        if (!cityEntry.favorite) {
          setCity([cityEntry]);
        }
      } else {
        setCity([]);
      }
    }
  }

  useEffect(() => {
    if (data) {
      getData().then(updateCity)
    }
  }, [data]);

  const getCity = (name?: string) => {
    if (name) {
      return getCityQuery({ variables: { name } });
    }
    setCity([]);
  }

  return {
    loading,
    data: city,
    load: getCity,
  }
}

const filter = (id: string) => (city: string) => city !== id;
export const useCaseAddNewCity = (id: string): Promise<string> => {
  return new Promise(async (resolve) => {
    const cities = await getData();
    const citiesToStore = cities.filter(filter(id));
    await storeData([...citiesToStore, id]);
    resolve('saved');
  })
}

export const useCaseRemoveCity = (id: string): Promise<string> => {
  return new Promise(async (resolve) => {
    const cities = await getData();
    const citiesToStore = cities.filter(filter(id));
    await storeData(citiesToStore);
    resolve('saved');
  })
}

export const useCaseConvertUnit = (
    temperature: Temperature,
    from: Unit,
    to: 'celsius' | 'fahrenheit',
  ): Temperature => {
    const convert = convertUnit[from][to];
    return {
      actual: convert(temperature.actual),
      min: convert(temperature.min),
      max: convert(temperature.max),
    }
}
