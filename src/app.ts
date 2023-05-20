import Fastify from "fastify";
import cors from "@fastify/cors";
import flashCardRoutes from "./modules/flashcard/flashcard.route";
import { flashCardSchemas } from "./modules/flashcard/flashcard.schema";
import { flashCardSetRoutes } from "./modules/flashcardset/flashcardset.route";
import { flashCardSetSchemas } from "./modules/flashcardset/flashcardset.schema";

import userRoutes from "./modules/user/user.route";

const server = Fastify();
for (const schema of [...flashCardSchemas, ...flashCardSetSchemas]) {
  server.addSchema(schema);
}

server.register(cors, { origin: "*" });

server.register(userRoutes);
server.register(flashCardRoutes);
server.register(flashCardSetRoutes);

server.listen({ port: 8080 }, () => {
  console.log("listening on port 8080");
});
