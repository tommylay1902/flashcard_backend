import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getUserHandler } from "./user.controller";

async function userRoutes(server: FastifyInstance) {
  server.get("/", getUserHandler);
}

export default userRoutes;
