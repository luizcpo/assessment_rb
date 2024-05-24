"use client"
import React, { useState } from "react";
import { fetchPokemons } from "../actions";
import PokemonCard from "./pokemonCard";
import type { Pokemon } from "../types/pokemon";
import ButtonLoadMore from "./buttonLoadMore";

interface PokemonListProps {
  pokemons: Pokemon[];
  next: string;
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons, next }) => {
  const [pokeList, setPokeList] = useState(pokemons);
  const [nextUrl, setNextUrl] = useState(next)

  const pokeId = (url: string):string => {
    const urlSplited = url.split("/");
    return urlSplited ? urlSplited[urlSplited.length - 2]! : "";
  }
  
  const imageUrl = (pokeId: string):string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;
  }

  const loadMore = async () => {
    const pokeResponse = await fetchPokemons(nextUrl);
    setPokeList([...pokeList, ...pokeResponse.results])
    setNextUrl(pokeResponse.next);
  }

  return (
    <React.Fragment>
      {pokeList.map((pokemon) => {
        return <PokemonCard key={pokeId(pokemon.url)} name={pokemon.name} image={imageUrl(pokeId(pokemon.url))} />
      })}
      <ButtonLoadMore handleClick={loadMore} />
    </React.Fragment>
  );
};

export default PokemonList;
