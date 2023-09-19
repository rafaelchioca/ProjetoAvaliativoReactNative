import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keyboard, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../services/api';
import axios from 'axios';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  CharacterItem,
  Character,
  CharacterImage,
  CharacterInfo,
  Image,
  Name,
  Status,
  StatusCircle,
  Text,
  Location,
  Episode,
  CharacterButton,
  CharacterButtonText,
} from './style';

export default class Main extends Component {
  state = {
    newCharacter: '',
    characters: [],
    loading: false,
  };

  async componentDidMount() {
    const characters = await AsyncStorage.getItem('characters');

    if (characters) {
      this.setState({characters: JSON.parse(characters)});
    }
  }

  async componentDidUpdate(_, prevState) {
    const {characters} = this.state;

    if (prevState.characters !== characters) {
      await AsyncStorage.setItem('characters', JSON.stringify(characters));
    }
  }

  handleAddCharacter = async () => {
    try {
      const {characters, newCharacter} = this.state;

      this.setState({loading: true});
      
      const response = await api.get(`/character/?name=${newCharacter}`);

      const episodeUrl = response.data.results[0].episode[0];

      const episodeResponse = await axios.get(episodeUrl);

      const data = {
        id: response.data.results[0].id,
        image: response.data.results[0].image,
        name: response.data.results[0].name,
        status: response.data.results[0].status,
        species: response.data.results[0].species,
        location: response.data.results[0].location.name,
        gender: response.data.results[0].gender,
        origin: response.data.results[0].origin.name,
        episode: episodeResponse.data.name,
      };

      this.setState({
        characters: [...characters, data],
        newCharacter: '',
        loading: false,
      });

      Keyboard.dismiss();

    //   console.log(response.data);
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({loading: false});
    }
  };

  handleAddCharacterId = async () => {
    try {
      const {characters, newCharacterId} = this.state;

      this.setState({loading: true});
      
      const response = await api.get(`/character/${newCharacterId}`);

      const episodeUrl = response.data.episode[0];

      const episodeResponse = await axios.get(episodeUrl);

      const data = {
        id: response.data.id,
        image: response.data.image,
        name: response.data.name,
        status: response.data.status,
        species: response.data.species,
        location: response.data.location.name,
        gender: response.data.gender,
        origin: response.data.origin.name,
        episode: episodeResponse.data.name,
      };

      this.setState({
        characters: [...characters, data],
        newCharacterId: '',
        loading: false,
      });

      Keyboard.dismiss();

    //   console.log(response.data);
    } catch (error) {
      alert('Personagem não encontrado!');
      this.setState({loading: false});
    }
  };

  render() {
    const {characters, newCharacter, newCharacterId, loading} = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite o nome do personagem" color={"#B8D433"}
            value={newCharacter}
            onChangeText={text => this.setState({newCharacter: text})}
            returnKeyType="send"
            onSubmitEditing={this.handleAddCharacter}/>
          <SubmitButton loading={loading} onPress={this.handleAddCharacter} style={{backgroundColor: '#B8D433', borderRadius: 10}}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
          </SubmitButton>   
        </Form>

        <Form>
          <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite o ID do personagem" color={"#B8D433"}
              value={newCharacterId}
              onChangeText={text => this.setState({newCharacterId: text})}
              returnKeyType="send"
              onSubmitEditing={this.handleAddCharacterId}/>
            <SubmitButton loading={loading} onPress={this.handleAddCharacterId} style={{backgroundColor: '#B8D433', borderRadius: 10}}>
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Icon name="add" size={20} color="#fff" />
              )}
            </SubmitButton>
          </Form>

        <List
          showsVerticalScrollIndicator={false}
          data={characters}
          keyExtractor={character => character.name}
          renderItem={({item}) => (
            <CharacterItem>
                <Character>
                    <CharacterImage>
                        <Image source={{uri: item.image}} />
                    </CharacterImage>

                    <CharacterInfo>
                        <Name>{item.name}</Name>
                        <Status> <StatusCircle status={item.status}/> {item.status} - {item.species}</Status>
                        <Text>Última localização conhecida:</Text>
                        <Location>{item.location}
                        </Location>
                        <Text>Visto pela primeira vez em:</Text>
                        <Episode>{item.episode}
                        </Episode>
                    </CharacterInfo>             
                </Character>


                    <CharacterButton
                        onPress={() => {
                        this.props.navigation.navigate('character', {character: item});
                        }}
                        style={{backgroundColor: '#B8D433', borderRadius: 10}}>
                        
                        <CharacterButtonText>Ver mais detalhes</CharacterButtonText>
                    </CharacterButton>

                    <CharacterButton
                        onPress={() => {
                        this.setState({
                            characters: this.state.characters.filter(
                                character => character.name !== item.name,
                            ),
                        });
                        }}
                        style={{backgroundColor: '#F63D52', borderRadius: 10}}>
                        <CharacterButtonText>Excluir</CharacterButtonText>
                    </CharacterButton>

                
            </CharacterItem>
            
          )}
        />
      </Container>
    );
  }
}