import { FastifyInstance } from "fastify";
import {
  createFCSetHandler,
  getFCSetByIdHandler,
  getFCSetHandler,
  updateFCSetHandler,
} from "./flashcardset.controller";
import { $ref } from "./flashcardset.schema";

export async function flashCardSetRoutes(server: FastifyInstance) {
  server.get("/flashCardSets", getFCSetHandler);
  server.get("/flashCardSets/:id", getFCSetByIdHandler);
  server.post(
    "/flashCardSets",
    {
      schema: {
        body: $ref("flashCardSetInput"),
        response: { 201: $ref("flashCardSetResponse") },
      },
    },
    createFCSetHandler
  );

  server.patch("/flashCardSets/:id", updateFCSetHandler);
}
