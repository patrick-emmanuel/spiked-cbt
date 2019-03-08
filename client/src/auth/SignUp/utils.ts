import { ApolloError } from "apollo-client";

export const formatSignUpError = (error: ApolloError) => {
  let message: string;
  const splittedMessage: string[] = error.message.split("=");
  if (splittedMessage.length > 1) {
    const field = splittedMessage[1].trim();
    if (field) {
      message = `This ${field} already exist`;
    }
  } else {
    message = error.message.split(": ")[1]
  }
  return message;
};
