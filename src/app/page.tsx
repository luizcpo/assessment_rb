import PokemonList from "./_components/pokemonList";
import { fetchPokemons } from "./actions";

const pokeResponse = await fetchPokemons();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Pokémon <span className="text-[hsl(223,100%,70%)]">Library</span>
      </h1>
      <div className="md:grid-row-1 m-auto mb-5 mt-5 flex w-full flex-col gap-4 md:grid md:w-10/12 md:grid-cols-3 md:items-center">
        <PokemonList pokemons={pokeResponse.results} next={pokeResponse.next} />
      </div>
    </main>
  );
}
