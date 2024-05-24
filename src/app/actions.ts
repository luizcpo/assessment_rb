"use server";
import { api } from "~/trpc/server";
import type { PokemonResponse } from "./types/pokemon";

export async function fetchPokemons(
  url = `${process.env.POKEMON_API_URL}/pokemon/?limit=30`,
): Promise<PokemonResponse> {
  const pokemons = await api.pokemon.getAll({ url });
  return pokemons;
}
