import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #212121;
`;

export const Form = styled.View`
    flex-direction: row;
    padding-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#B8D433',
})`
    flex: 1;
    height: 40px;
    background: #303030;
    border-radius: 10px;
    padding: 0 15px;
    border: 1px solid #B8D433;
`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #3498db;
    margin-left: 10px;
    padding: 0 12px;
    opacity: ${props => (props.loading ? 0.6 : 1)};
`;

export const List = styled.FlatList`

`;

export const CharacterItem = styled.View`
    flex-direction: column;

    background: #303030;
    border-radius: 10px;
    margin-top: 15px;
`;

export const Character = styled.View`
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding: 10px;

`;

export const CharacterImage = styled.View`
    width: 50%;
    height: 150px;
`;

export const CharacterInfo = styled.View`
    width: 50%;
    height: 150px;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background: #eee;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    padding-left: 10px;
`;

export const Status = styled.Text`          
    flex-direction: column;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    padding-left: 10px;
`;

export const StatusCircle = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 50px;
  margin-right: 5px;

  background-color: ${(props) => {
    if (props.status === 'Alive') return 'green';
    if (props.status === 'Dead') return 'red';
    if (props.status === 'unknown') return 'gray';
    return 'transparent';
  }};
`;

export const Specie = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    padding-left: 10px;
`;

export const Text = styled.Text`
    font-size: 12px;
    color: #fff;
    opacity: 0.75;
    font-weight: bold;
    margin-top: 15px;
    padding-left: 10px;
`;

export const Location = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    padding-left: 10px;
`;

export const Episode = styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
    padding-left: 10px;
`;

export const CharacterButton = styled(RectButton)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    height: 36px;
    width: 150px;
`;

export const CharacterButtonText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
`;

export const Header = styled.View`
    padding-top: 30px;
    align-items: center;
    justify-content: center;
`;

export const Section = styled.View`

`;

export const ImageCharacter = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background: #eee;
`;

export const NameCharacter = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    margin-top: 4px;

`;

export const StatusCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;

`;

export const SpecieCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;

export const GenderCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;

export const IdCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;

export const OriginCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;

export const LocationCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;

export const EpisodeCharacter = styled.Text`
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
    opacity: 0.75;
`;