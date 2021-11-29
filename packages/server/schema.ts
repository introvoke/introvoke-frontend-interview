import Ajv, { JSONSchemaType, ValidateFunction } from "ajv";
import { NextFunction, Request, Response } from "express";
import { NewMessage, UpdatedMessage } from "./types";

const ajv = new Ajv();

const newMessageSchema: JSONSchemaType<NewMessage> = {
  type: "object",
  properties: {
    username: { type: "string" },
    message: { type: "string" },
  },
  required: ["username", "message"],
  additionalProperties: false,
};

const updatedMessageSchema: JSONSchemaType<UpdatedMessage> = {
  type: "object",
  properties: {
    id: { type: "string" },
    message: { type: "string" },
  },
  required: ["message"],
};

export const validateNewMessage = ajv.compile(newMessageSchema);

export const validateUpdatedMessage = ajv.compile(updatedMessageSchema);

export const createValidatePayload =
  <T = any>(validator: ValidateFunction<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    if (validator(req.body)) {
      return next();
    }
    res.status(400).json({
      errors: validator.errors?.map(({ message }) => message),
    });
  };
