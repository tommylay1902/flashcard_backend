import { FastifyReply, FastifyRequest } from "fastify";

export async function getUserHandler(req: FastifyRequest, reply: FastifyReply) {
  reply.send({ hello: "world" });
}
