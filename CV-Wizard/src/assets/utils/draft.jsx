import { v4 as uuidv4 } from "uuid";

export function blankCV() {
  return {
    id: uuidv4(),
    userId: null,
    styles: {
      fontSize: "med",
      primaryFontStyle: "elegant",
      secondaryFontStyle: "classic",
      primaryFontClr: "#000000",
      secondaryFontClr: "#1f1f1f",
      primaryClr: "#2190f8",
      accentClr: "#441300",
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
