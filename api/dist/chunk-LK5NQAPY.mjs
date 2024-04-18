import {
  BadRequest
} from "./chunk-5QBEOMCR.mjs";

// src/error-handler.ts
import { ZodError } from "zod";
var errorHandler = (error, reuest, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Error during validation",
      errors: error.format()._errors
    });
  }
  if (error instanceof BadRequest) {
    return reply.status(400).send({ message: error.message });
  }
  return reply.status(500).send({ message: "Um erro aconteceu!" });
};

export {
  errorHandler
};
