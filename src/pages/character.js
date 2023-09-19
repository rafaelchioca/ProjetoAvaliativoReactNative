import React, {Component} from 'react';
import {
  Container,
  Header,
  Section,
  ImageCharacter,
  NameCharacter,
  GenderCharacter,
  IdCharacter,
  OriginCharacter,
  SpecieCharacter,
  StatusCharacter,
  LocationCharacter,
  EpisodeCharacter,
  StatusCircle,
} from './style';

export default class Character extends Component {

  render() {
    const {route} = this.props;
    const {character} = route.params;

    return (
        <Container>
            <Header>
                <ImageCharacter source={{uri: character.image}} />
                <NameCharacter>{character.name}</NameCharacter>
                <StatusCharacter><StatusCircle status={character.status}/> {character.status}</StatusCharacter>
            </Header>
            
            <Section>
                <IdCharacter>Id: {character.id}</IdCharacter>
                <GenderCharacter>Gênero: {character.gender}</GenderCharacter>
                <SpecieCharacter>Espécie: {character.species}</SpecieCharacter>
                <OriginCharacter>Origem: {character.origin}</OriginCharacter>
                <LocationCharacter>Última localização: {character.location}</LocationCharacter>
                <EpisodeCharacter>Primeira aparição: {character.episode}</EpisodeCharacter>
            </Section>
        </Container>
    );
  }
}