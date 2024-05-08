import { ErrorTypes } from "./constants";

export class CustomError extends Error {
  message: string;
  type: keyof typeof ErrorTypes;
  status: (typeof ErrorTypes)[keyof typeof ErrorTypes];
  stack: string | undefined;

  constructor(message: string, type: keyof typeof ErrorTypes) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, CustomError.prototype);

    this.message = message;
    this.type = type;
    this.status = ErrorTypes[type];
    this.stack =
      process.env.NODE_ENV === "development"
        ? new Error().stack || "Unknown stack trace"
        : undefined;
  }

  serialize() {
    return {
      message: this.message,
      type: this.type,
      status: this.status,
      stack: this.stack,
    };
  }
}

export type CustomErrorType = {
  message: string;
  type: keyof typeof ErrorTypes;
  status: (typeof ErrorTypes)[keyof typeof ErrorTypes];
  stack: string | undefined;
};

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: { [x in keyof string]: { common: string; official: string } };
  };
  latlng: number[];
  flag: string;
};
