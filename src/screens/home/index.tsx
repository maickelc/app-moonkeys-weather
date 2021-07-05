import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { UnitOption, CityWeather } from '../../interfaces/index';
import { AppButton, SafeAreaView, AppViewRow, AppTextButton, AppViewRowCenter } from '../../components/index';
import { useCaseConvertUnit } from '../../usecase/index';
import CardWeather from '../../components/cardWeather/index';
import InputContainer from '../../components/input/index';
import useHookCity from '../../hooks/city';
import useHookCities from '../../hooks/cities';

const Home: React.FC = () => {
  const { getCities, cities, loading } = useHookCities();
  const [currentUnit, setCurrentUnit] = useState<UnitOption>('celsius');
  const [searchTerm, setSearchTerm] = useState('');
  const { getCity, data: city } = useHookCity();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      getCities();
    }
  }, [isFocused]);

  const resetSearch = () => {
    setSearchTerm('');
    getCity('');
  }

  const _renderHeader = () => {
    return (
      <View>
        <View>
          <AppButton
            onPress={() => setCurrentUnit('celsius')}
            selected={(currentUnit === 'celsius')}>
            <AppTextButton 
              selected={(currentUnit === 'celsius')}>
                Celcius
            </AppTextButton>
          </AppButton>
          <AppButton
            onPress={() => setCurrentUnit('fahrenheit')}
            selected={(currentUnit === 'fahrenheit')}>
            <AppTextButton
              selected={(currentUnit === 'fahrenheit')}>
              Fahrenheit
            </AppTextButton>
          </AppButton>
        </View>
        <InputContainer
          placeholder="Buscar cidade"
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={() => getCity(searchTerm)}
        />
      </View>
    )
  };

  const _renderCard = (item: CityWeather) => {
    const { weather } = item;
    const temperature = useCaseConvertUnit(
      weather.temperature,
      'kelvin',
      currentUnit,
    );
    return (
      <CardWeather
        key={item.name}
        city={item}
        temperature={temperature}
        summary={weather.summary}
        mode={item.favorite ? 'list' : 'search'}
        onUpdate={() => {
          getCities();
          resetSearch();
        }}
      />
    )
  }

  const _renderLoading = () => (
    <AppViewRowCenter>
      <ActivityIndicator size="large" color="#0000ff" />
    </AppViewRowCenter>
  )

  const _renderCities = () => {
    let dataList: CityWeather[] = [];
    if (cities) {
      dataList = [...cities];
    }
    if (city && searchTerm) {
      dataList = [...dataList, ...city];
    }

    return (
      <AppViewRow>
        { dataList.map(_renderCard) }
      </AppViewRow>
    )
  }
  return (
    <SafeAreaView>
      {_renderHeader()}
      { loading && _renderLoading()}
      { !loading && _renderCities()}
    </SafeAreaView>
  )
}

export default Home;
