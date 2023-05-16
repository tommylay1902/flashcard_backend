import { FastifyInstance } from "fastify";
import {
  createFlashCardSet,
  getFlashCardSetById,
} from "./flashcardset.controller";
import { $ref } from "./flashcardset.schema";

export async function flashCardSetRoutes(server: FastifyInstance) {
  server.get("/flashCardSets", getFlashCardSetById);
  server.post(
    "/flashCardSets",
    {
      schema: {
        body: $ref("flashCardSetInput"),
        response: { 201: $ref("flashCardSetResponse") },
      },
    },
    createFlashCardSet
  );
}
