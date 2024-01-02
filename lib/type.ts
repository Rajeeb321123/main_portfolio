// for all types

import { links } from "./data";

// number below means could be any of the them like home,about...
export type SectionName = (typeof links)[number]["name"];