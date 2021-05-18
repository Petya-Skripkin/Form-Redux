import { createError } from "apollo-errors";

export const NotFoundError = createError("NOT_FOUND_ERROR", {
  message: "Not found"
});

export const errorsCode = {
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  NOT_FOUND_ERROR: "NOT_FOUND_ERROR"
};
