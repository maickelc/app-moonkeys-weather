import React from 'react';
import { TouchableOpacity } from 'react-native';
import { InputView, Input } from './styles';
import { Text } from '../cardWeather/styles';

interface IInputContainerProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
}

const InputContainer: React.FC<IInputContainerProps> = ({
  placeholder,
  value,
  onChange,
  onSearch,
}) => {
  return (
    <InputView>
      <Input
        testID="searchInput"
        placeholder={placeholder}
        value={value}
        onChangeText={(text: string) => {
          onChange(text);
        }}
      />
      <TouchableOpacity testID="searchButton" onPress={onSearch}>
        <Text>Buscar</Text>
      </TouchableOpacity>
    </InputView>
  );
}

export default InputContainer;
