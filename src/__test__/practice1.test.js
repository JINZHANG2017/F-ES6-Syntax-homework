import { parseData } from "../practice1";

const input = {
  data: [
    ["Anna", 16, "Female", "2004-12-01"],
    ["Kevin", 22, "Male", "1998-01-21"],
  ],
  column: [
    { name: "name", note: "" },
    { name: "age", note: "" },
    { name: "gender", note: "" },
    { name: "birthday", note: "" },
  ],
};

const output = [
  { name: "Anna", age: 16, gender: "Female", birthday: "2004-12-01" },
  { name: "Kevin", age: 22, gender: "Male", birthday: "1998-01-21" },
];


test("parse data to expect result", () => { 
  expect(parseData(input)).toEqual(output);
});
