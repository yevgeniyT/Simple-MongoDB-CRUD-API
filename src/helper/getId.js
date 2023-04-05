import { v4 as uuidv4 } from "uuid";

export const getUniqueID = () => {
	return uuidv4()
}

// now it can be used in any component