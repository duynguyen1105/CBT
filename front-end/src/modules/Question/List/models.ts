export enum KeyTable {
  ID = "_id",
  QuestionID = "_id",
  Title = "questionTitle",
  Status = "status",
  Type = "questionType",
  Category = "category",
  CreateOn = "createdAt",
}

export const headerOption = [
  { name: "ID", width: 30, key: KeyTable.ID },
  { name: "Title", width: 300, key: KeyTable.Title },
  { name: "Type", width: 150, key: KeyTable.Type },
  { name: "Created On", width: 130, key: KeyTable.CreateOn },
  { name: "Category", width: 100, key: KeyTable.Category },
  { name: "Status", width: 110, key: KeyTable.Status },
];
