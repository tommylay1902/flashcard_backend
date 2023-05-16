import z from "zod";
import { buildJsonSchemas } from "fastify-zod";

const flashCardCore = {
  title: z.string(),
  description: z.string(),
};

// const getFlashCardsResponse = z.array(getFlashCardResponse);

const flashCardSetInput = z.object({
  ...flashCardCore,
});

const flashCardSetResponse = z.object({
  ...flashCardCore,
});

// id          Int          @id @default(autoincrement())
// title       String
// description String
// createdAt   DateTime     @default(now())
// user        user?        @relation(fields: [userId], references: [id])
// flashcards  flash_card[]
// userId      Int?

const flashSetUpdateInput = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    createdAt: z.date().optional(),
  })
  .refine(
    ({ title, description, createdAt }) =>
      title === undefined &&
      description === undefined &&
      createdAt === undefined,
    { message: "One of the fields must be defined" }
  );

export type CreateFlashCardSetInput = z.infer<typeof flashCardSetInput>;

export type UpdateFlashCardSetInput = z.infer<typeof flashSetUpdateInput>;
export const { schemas: flashCardSetSchemas, $ref } = buildJsonSchemas(
  {
    // getFlashCardResponse,
    flashCardSetResponse,
    flashCardSetInput,
  },
  { $id: "flashCardSet" }
);
