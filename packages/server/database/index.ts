import sortBy from "lodash/sortBy";
import { v4 } from "uuid";
import { Message } from "../types";
import seed from "./seed.json";

// Init our in-memory datastore with seed data
const database: {
  messages: Message[];
} = {
  messages: seed.messages as Message[],
};

/**
 * Returns a list of all messages sorted by time ascending (oldest to newest)
 */
export function getAllMessages(): Message[] {
  return sortBy(database.messages, ({ createdTime }) => createdTime);
}

/**
 * Returns a message by id
 */
export function getMessage(id: string) {
  return database.messages.find((message) => message.id === id) ?? null;
}

/**
 * Adds a new message
 */
export function addMessage(message: Message) {
  const now = Date.now();
  const newMessage = {
    ...message,
    id: v4(),
    createdTime: now,
    updatedTime: Date.now(),
  };
  database.messages.push(newMessage);
  return newMessage;
}

/**
 * Updates a message by id
 */
export function updateMessage(id: string, { message }: { message: string }) {
  const current = database.messages.findIndex(
    ({ id: messageId }) => messageId === id
  );
  if (current === -1) throw new Error(`No message exists for id ${id}`);

  database.messages[current] = {
    ...database.messages[current],
    message,
    updatedTime: Date.now(),
  };

  return database.messages[current];
}

/**
 * Removes a message by id
 */
export function deleteMessage(id: string) {
  database.messages = database.messages.filter(
    ({ id: messageId }) => messageId !== id
  );
}
