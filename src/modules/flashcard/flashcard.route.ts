import { FastifyInstance } from "fastify";
import {
  createFCHandler,
  getFCBySetHandler,
  getFCHandler,
  updateFCHandler,
} from "./flashcard.controller";
import { $ref } from "./flashcard.schema";

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
    getFCHandler
  );

  server.get(
    "/flashcards/set/:id",
    {
      schema: {},
    },
    getFCBySetHandler
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
    createFCHandler
  );

  server.patch(
    "/flashcards/:id",
    {
      schema: { body: $ref("flashCardUpdateInput") },
    },
    updateFCHandler
  );
}

export default flashCardRoutes;
