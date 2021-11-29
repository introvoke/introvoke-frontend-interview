/**
 * The message returned from the API
 */
export interface Message {
  id: string;
  username: string;
  message: string;
  createdTime: number;
  updatedTime: number;
}

/**
 * Shape for creating a new message
 */
export interface NewMessage
  extends Omit<Message, "createdTime" | "updatedTime" | "id"> {}

/**
 * Shape for updating an existing message
 */
export interface UpdatedMessage
  extends Omit<Message, "username" | "createdTime" | "updatedTime"> {}
