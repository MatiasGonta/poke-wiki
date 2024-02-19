import { colorTypes } from "./colorTypes.enum";

export type Filters = {
    type: (keyof typeof colorTypes)[] | null;
};