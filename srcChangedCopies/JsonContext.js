import { createContext } from "react";

const jsonOriginal = require("./Langs.json");

export const JsonContext = createContext({ ...jsonOriginal });
