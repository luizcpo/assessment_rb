import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { PokemonResponse } from "~/app/types/pokemon";
import { z } from "zod";

export const pokemonRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ url: z.string() }))
    .query(async (opts): Promise<PokemonResponse> => {
      const { input } = opts;
      const pokeResponse = await fetch(`${input.url}`);
      return pokeResponse.json() as Promise<PokemonResponse>;
    }),
});