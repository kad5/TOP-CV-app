import { v4 as uuidv4 } from "uuid";

export function blankCV() {
  return {
    id: uuidv4(),
    userId: null,
    styles: {
      fontSize: 16,
      primaryFontStyle: "DM Sans",
      secondaryFontStyle: "system-ui",
      primaryFontClr: "#000000",
      secondaryFontClr: "#1f1f1f",
      primaryClr: "#2190f8",
      accentClr: "#441300",
    },
    header: {
      layout: "vertical",
      template: "standard-v",
      name: "John Doe",
      titleLetters: "PhD",
      jobTitle: "General Manager",
      email1: "email@emailCompany.com",
      email2: "email@workPlace.com",
      phone1: "+200000011111",
      phone2: "+100000011111",
      address: "205 - 3 My building block - My city",
      workAddress: "My Workplace - My city",
      customList1Title: "my list 1",
      customList1Content: ["new list item1"],
      customList2Title: "my list 2",
      customList2Content: [],
      customPara1Title: "my brief 1",
      customPara1Content: "Short summary of something I want to emphacise",
      customPara2Title: "my brief 2",
      customPara2Content: "Short summary of something I want to emphacise",
    },
    body: [], //CV components objects
  };
}

export function cvComponent() {
  return {
    id: uuidv4(),
    type: null, // list vs paragraph
    mode: null, // compact vs standard vs detailed
    style: null, // the css class for styling
    title: null,
    content: [], //listItems objects if type is list or or list of strings if paragraph
  };
}

export function listItem() {
  return {
    id: uuidv4(),
    title: null, // the job title
    subtitle: null, // the date
    summary: null,
    body: [{ id, content }], // if they want an array of li strings
  };
}

/*3 component mode: 
compact:
  component title 
  list item title and subtitle
standard:
  component title
  list item title, subtitle, and summary
 details:
  component title
  list item title, subtitle, summary and body strings list
*/

/*
premade templates
premade components
*/

export const testCV = {
  id: "1175",
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
    layout: "horizontal",
    template: null,
    name: "John Doe",
    titleLetters: "PhD",
    jobTitle: "General Manager",
    email1: "email@emailCompany.com",
    email2: "email@workPlace.com",
    phone1: "+200000011111",
    phone2: "+100000011111",
    address: "205 - 3 My building block - My city",
    workAddress: "My Workplace - My city",
    customList1Title: "my list 1",
    customList1Content: ["ara", "bara"],
    customList2Title: "my list 2",
    customList2Content: ["dido", "fido"],
    customPara1Title: "my brief 1",
    customPara1Content: "Short summary of something I want to emphacise",
    customPara2Title: "my brief 2",
    customPara2Content: "Short summary of something I want to emphacise",
  },
  body: [
    {
      id: "123123",
      type: "list", // list vs paragraph
      mode: "compact", // compact vs standard vs detailed
      style: "elegant", // the css class (compact - standard -details)
      title: "behsawar",
      content: [
        {
          id: "1",
          title: "heyaaa", // the job title
          subtitle: "fouyoo", // the date
          summary: "duga duga", // if they want a paraphraph
          body: ["dido", "fido", "ara", "bara"], // if they want an array of li strings
        },
        {
          id: "31",
          title: "shaga", // the job title
          subtitle: "maga", // the date
          summary: null, // if they want a paraphraph
          body: ["ara", "bara"], // if they want an array of li strings
        },
      ], //listItems objects if type is list
    },
    {
      id: "1223",
      type: "list", // list vs paragraph
      mode: "compact", // compact vs standard vs detailed
      style: "elegant", // the css class (compact - standard -details)
      title: "behsawar",
      content: [
        {
          id: "1",
          title: "heyaaa", // the job title
          subtitle: "fouyoo", // the date
          summary: "duga duga", // if they want a paraphraph
          body: ["dido", "fido", "ara", "bara"], // if they want an array of li strings
        },
        {
          id: "31",
          title: "shaga", // the job title
          subtitle: "maga", // the date
          summary: null, // if they want a paraphraph
          body: ["ara", "bara"],
        },
      ],
    },
    {
      id: "12c3",
      type: "para", // list vs paragraph
      mode: "compact", // compact vs standard vs detailed
      style: "elegant", // the css class (compact - standard -details)
      title: "zaga",
      content: ["asdhajsdasdasd", "jhzxcjzhxcjzhxcjhzxc"], //listItems objects if type is list
    },
    {
      id: "133",
      type: "para2", // list vs paragraph
      mode: "compact", // compact vs standard vs detailed
      style: "elegant", // the css class (compact - standard -details)
      title: "zaga",
      content: ["asdhajsdasdasd", "jhzxcjzhxcjzhxcjhzxc"], //listItems objects if type is list
    },
  ],
};
