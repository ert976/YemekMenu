import { generateEntityId } from "../utils/id-generator";
import { appState, saveState } from "./state";

export const addUser = async (
  username: string,
  email: string,
  passwordHash: string,
) => {
  const id = generateEntityId();
  appState.users.push({
    id,
    username,
    email,
    passwordHash,
    lastActivity: Date.now(),
  });
  await saveState();
  return id;
};

export const getUser = async (username: string) => {
  return appState.users.find((u) => u.username === username) || null;
};
