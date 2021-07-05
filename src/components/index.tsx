import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background: #C4C4C4;
`
interface IAppButtonProps {
  selected: boolean | undefined;
}
export const AppButton = styled.TouchableOpacity<IAppButtonProps>`
  padding: 8px;
  background-color: ${props => props.selected ? 'black' : 'white'};
`

export const AppTextButton = styled.Text<IAppButtonProps>`
  color: ${props => props.selected ? 'white' : 'black'};
`

export const AppText = styled.Text`
  padding: 8px;
`

export const ButtonClose = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  background: #C4C4C4;
  margin-right: 25px;
  margin-top: 25px;
`
export const AppViewRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const AppViewRowCenter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`