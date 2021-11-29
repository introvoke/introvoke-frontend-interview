import { Router } from "express";
import { Server } from "socket.io";
import {
  addMessage,
  deleteMessage,
  getAllMessages,
  getMessage,
  updateMessage,
} from "./database";
import { NewMessage, UpdatedMessage } from "./types";
import {
  validateNewMessage,
  validateUpdatedMessage,
  createValidatePayload,
} from "./schema";

export const router = Router();

/**
 * Gets all messages
 */
router.get("/messages", (req, res) => {
  res.status(200).json(getAllMessages());
});

/**
 * Gets a single message by id
 */
router.get("/messages/:messageId", (req, res) => {
  const message = getMessage(req.params.messageId);
  if (!message) {
    res.status(404).json();
  } else {
    res.status(200).json(message);
  }
});

/**
 * Creates a new message
 */
router.post(
  "/messages",
  createValidatePayload<NewMessage>(validateNewMessage),
  (req, res) => {
    const message = addMessage(req.body);
    (req.app.get("io") as Server).sockets.emit("message-created", message);
    res.status(201).json(message);
  }
);

/**
 * Updates an existing message
 */
router.patch(
  "/messages/:messageId",
  createValidatePayload<UpdatedMessage>(validateUpdatedMessage),
  (req, res) => {
    const message = getMessage(req.params.messageId);
    if (!message) {
      res.status(404).json();
    } else {
      const message = updateMessage(req.params.messageId, req.body);
      (req.app.get("io") as Server).sockets.emit("message-updated", message);
      res.status(200).json(message);
    }
  }
);

/**
 * Removes an existing message
 */
router.delete("/messages/:messageId", (req, res) => {
  deleteMessage(req.params.messageId);
  (req.app.get("io") as Server).sockets.emit("message-deleted", {
    id: req.params.messageId,
  });
  res.status(204).json();
});
