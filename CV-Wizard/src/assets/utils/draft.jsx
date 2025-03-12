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
      primaryClr: "#f7f7f7",
      accentClr: "#ffffff",
    },
    header: {
      layout: "horizontal",
      template: "standard-h",
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
    body: [],
  };
}

export function cvComponent(
  type = "list",
  mode = "detailed",
  title = "custom block",
  liNum = 2
) {
  let arr = [];
  if (type === "list") {
    for (let i = 0; i < liNum; i++) {
      arr.push(listItem());
    }
  }

  const content =
    type === "para"
      ? [
          "this is a paragraph cv block, you could add here free text describing this cv block, for example a personal statement, a description of a project, or details of an achievement",
        ]
      : arr;
  return {
    id: uuidv4(),
    type, // list vs paragraph
    mode, // compact vs standard vs detailed
    //style: null, // the css class for styling - didnt add it, im feeling tired tbh
    title,
    content, //listItems objects if type is list or or a string if paragraph
  };
}

export function listItem() {
  return {
    id: uuidv4(),
    title: "Your list container title", // the job title
    subtitle: "your list container subtitle", // the date
    summary:
      "this is a summary of this list item. you could have this alone or along with the actual list. you could describe here a short summary of this item or alternatively just delete it",
    body: [
      "the first list item : describe here details about this cv block in an orderly fashion",
      "the second list item : for example, you could list a set of skills you posses or had learned",
      "the third list item : or you could delete all these and you would be left with the summary",
    ], // if they want an array of li strings
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

// hard coded body for test
/*
      {
        id: "123123",
        type: "list", // list vs paragraph
        mode: "detailed", // compact vs standard vs detailed
        style: "elegant", // the css class (compact - standard -details)
        title: "Experience",
        content: [
          {
            id: "1",
            title: "Job1", // the job title
            subtitle: "Senior manager", // the date
            summary: "duga duga", // if they want a paraphraph
            body: ["dido", "fido", "ara", "bara"], // if they want an array of li strings
          },
          {
            id: "31",
            title: "Job2", // the job title
            subtitle: "Assistant Manager", // the date
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
        title: "Education",
        content: [
          {
            id: "1",
            title: "Bachelor of Business", // the job title
            subtitle: "Sigma Uni", // the date
            summary: "duga duga", // if they want a paraphraph
            body: ["dido", "fido", "ara", "bara"], // if they want an array of li strings
          },
          {
            id: "31",
            title: "High School", // the job title
            subtitle: "Ari High", // the date
            summary: null, // if they want a paraphraph
            body: ["ara", "bara"],
          },
        ],
      },
      {
        id: "12c3",
        type: "para", // list vs paragraph
        mode: "detailed", // compact vs standard vs detailed
        style: "elegant", // the css class (compact - standard -details)
        title: "Courses",
        content: ["asdhajsdasdasd"], //listItems objects if type is list
      },
      {
        id: "133",
        type: "para", // list vs paragraph
        mode: "detailed", // compact vs standard vs detailed
        style: "elegant", // the css class (compact - standard -details)
        title: "Hobbies",
        content: [
          "      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur similique doloremque sint molestiae aliquid, quibusdam eveniet repudiandae laudantium! Recusandae vero aliquid quae animi nemo eligendi nisi tempore veniam odit? Quis.",
        ], //listItems objects if type is list
      },
*/
