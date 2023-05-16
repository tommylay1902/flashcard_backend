import { FastifyInstance } from "fastify";
import {
  createFlashCard,
  getFCBySet,
  getFlashCardById,
  updateFlashCardHandler,
} from "./flashcard.controller";
import { $ref } from "./flashcard.schema";
import { getFlashCardsBySetService } from "./flashcard.service";

async function flashCardRoutes(server: FastifyInstance) {
  console.log("registering flashcards");
  server.get(
    "/flashcards/:id",
    {
      schema: {
        response: {
          200: $ref("getFlashCardResponse"),
        },
      },
    },
    getFlashCardById
  );

  server.get(
    "/flashcards/set/:id",
    {
      schema: {},
    },
    getFCBySet
  );

  server.post(
    "/flashcards",
    {
      schema: {
        body: $ref("flashCardCreateInput"),
        response: {
          201: $ref("getFlashCardResponse"),
        },
      },
    },
    createFlashCard
  );

  server.patch(
    "/flashcards/:id",
    {
      schema: { body: $ref("flashCardUpdateInput") },
    },
    updateFlashCardHandler
  );
}

export default flashCardRoutes;
