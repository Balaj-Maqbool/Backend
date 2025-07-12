import { ApiError } from "./ApiError.js";

const throwIfInvalid = (condition, status = 400, message = "Invalid Field") => {
    if (condition) throw new ApiError(status, message);
};

export { throwIfInvalid };
