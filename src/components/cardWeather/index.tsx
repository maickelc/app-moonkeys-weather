import React from 'react';
import { View, Text } from 'react-native';
import { Row, City, Actual, Max, Min, CardView, ButtonRemove } from './styles';
import { CardMode, CityWeather, Temperature } from '../../interfaces/index';
import { useCaseRemoveCity, useCaseAddNewCity } from '../../usecase/index';

interface ICardWeatherProps {
  city: CityWeather;
  temperature: Temperature;
  mode: CardMode;
  onUpdate: () => void;
}

const CardWeather: React.FC<ICardWeatherProps> = ({
  city,
  temperature,
  mode,
  onUpdate,
}) => {
  const { actual, min, max } = temperature;
  const fixed = (value: number, fraction = 1) => value.toFixed(fraction);

  interface IAction {
    [key: string]: (id: string) => Promise<string>;
  }

  const action: IAction = {
    'list': useCaseRemoveCity,
    'search': useCaseAddNewCity,
  }
  return (
    <CardView testID='cardweather'>
      <View>
        <City>{city.name}</City>
        <Actual>{fixed(actual)}º</Actual>
      </View>
      <Row>
        <Max>{fixed(max, 0)}º</Max>
        <Min>{fixed(min, 0)}º</Min>
      </Row>
      <ButtonRemove onPress={() => {
        const promise = action[mode](city.id)
        promise.then(onUpdate);
      }}>
        <Text>
          {`${mode === 'list' ? 'Remover' : 'Adicionar'}`}
        </Text>
      </ButtonRemove>
    </CardView>
  )
}

export default CardWeather;
