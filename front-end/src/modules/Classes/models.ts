export interface IUser {
  fullname: string;
  summary: string;
}

export interface IData {
  id: string;
  category: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  score?: number;
  user: IUser;
}

export enum IQuestionType {
  ABCD = "ABCD",
  CHOICEANSWER = "ChoiceAnswer",
  INTOSPACE = "IntoSpace",
  MULTICHOICE = "MultiChoice",
  SELECTANSWER = "SelectAnswer",
  TRUEFALSE = "TrueFalse",
}

export enum KeyTables {
  ID = "id",
  CLASS_NAME = "ClassName",
  TEACHER = "Teacher",
  START_TIME = "StartTime",
  END_TIME = "EndTime",
  STATUS = "Status",
}

export const HeaderTableClasses = [
  { name: "ID", width: 30, key: KeyTables.ID },
  { name: "Class Name", width: 200, key: KeyTables.CLASS_NAME },
  { name: "Teacher", width: 180, key: KeyTables.TEACHER },
  { name: "Start Time", width: 130, key: KeyTables.START_TIME },
  { name: "End Time", width: 120, key: KeyTables.END_TIME },
  { name: "Status", width: 120, key: KeyTables.STATUS },
];

export const fakeDataClasses = [
  {
    id: "1",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "Closed",
  },
  {
    id: "2",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "Closed",
  },
  {
    id: "3",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "Closed",
  },
  {
    id: "4",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "Closed",
  },
  {
    id: "5",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "In Progress",
  },
  {
    id: "6",
    classID: "CB15-090",
    className: "IELTS Begin Levels 1",
    teacher: "IELTS Advanced",
    startTime: "28/03/2022",
    endTime: "28/03/2023",
    status: "In Progress",
  },
];

export const fakeDataTestCard: IData[] = [
  {
    id: "01",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
  {
    id: "02",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
  {
    id: "03",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    score: 5,
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
  {
    id: "04",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    score: 7,
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
  {
    id: "05",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    score: 2,
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
  {
    id: "06",
    category: "IELTS",
    title: "GT-Writting Test-Informal Letters",
    date: "27 Nov",
    endTime: "11:00 AM",
    startTime: "08:30 AM",
    score: 10,
    user: {
      fullname: "Daniel.H",
      summary: "Expert IELTS instructor and assessor",
    },
  },
];

export const fakeQuestion = [
  {
    type: IQuestionType.ABCD,
    title: "How much will the evening cost?",
    A: "nothing",
    B: "just the fares",
    C: "less than $40.000",
    D: "more than $40.000",
  },
  {
    type: IQuestionType.ABCD,
    title: "How old are you?",
    A: "nothing",
    B: "just the fares",
    C: "less than $40.000",
    D: "more than $40.000",
  },
  {
    type: IQuestionType.ABCD,
    title: "How much will the evening cost?",
    A: "nothing",
    B: "just the fares",
    C: "less than $40.000",
    D: "more than $40.000",
  },
  {
    type: IQuestionType.INTOSPACE,
    title: "Holiday in greece",
    paragraph: [
      {
        title: "Airport",
        desc: "",
      },
      {
        title: "City of athens",
        desc: "",
      },
      {
        title: "Greek Islands",
        desc: "",
      },
    ],
  },
];

export const fakeReading = {
  title: "Reading Passing 1",
  summary:
    "You should spend about 20 minutes on Question 1-13, which are base on Reading Passing 1 below.",
  image:
    "https://plus.unsplash.com/premium_photo-1663127442035-02a222ef666e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda soluta aperiam numquam perspiciatis, blanditiis sequi ea minima dolorem, incidunt animi laborum quisquam vel aspernatur eius natus, saepe minus perferendis! Esse!",
};

export const fakeWriting = {
  title: "Writing Task 1",
  image:
    "https://images.unsplash.com/photo-1562737794-88835094442e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1230&q=80",
};
