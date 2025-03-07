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
      customList1Content: [],
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

function cvComponent() {
  return {
    id: uuidv4(),
    type: null, // list vs paragraph
    mode: null, // compact vs standard vs detailed
    style: null, // the css class (compact - standard -details)
    title: null,
    para: null, // if type is paraphraph
    content: [], //listItems objects if type is list
  };
}

function listItem() {
  return {
    id: uuidv4(),
    title: null, // the job title
    subtitle: null, // the date
    summary: null, // if they want a paraphraph
    body: [], // if they want an array of li strings
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
