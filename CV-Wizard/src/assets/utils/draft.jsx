import { v4 as uuidv4 } from "uuid";

export function blankCV() {
  return {
    id: uuidv4(),
    userId: null,
    styles: {
      fontSize: null,
      primaryFontType: null,
      secondaryFontType: null,
      primaryFontClr: null,
      secondaryFontClr: null,
      primaryClr: null,
      accentClr: null,
    },
    header: {
      type: null,
      name: null,
      titleLetters: null,
      jobTitle: null,
      email1: null,
      email2: null,
      phone1: null,
      phone2: null,
      address: null,
      workAddress: null,
    },
    body: [],
  };
}
