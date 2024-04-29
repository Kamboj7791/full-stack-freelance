import { z } from "zod";

export const messageSchema = z.object({
  message: z
    .string()
    .min(6, "message must be atleast 6 characters")
    .max(30, "message shouldn't exceeds more than 30 characters"),
});
