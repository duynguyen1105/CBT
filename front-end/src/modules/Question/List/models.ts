
export enum KeyTable {
  ID = 'id',
  QuestionID = 'questionId',
  Title = 'title',
  Status = 'statusName',
  Type = 'questionType',
  Category = 'questionCategory',
  CreateOn = 'creationTime',
}

export const headerOption = [
  { name: 'ID', width: 30, key: KeyTable.ID },
  { name: 'Title', width: 300, key: KeyTable.Title },
  { name: 'Type', width: 100, key: KeyTable.Type },
  { name: 'Created On', width: 130, key: KeyTable.CreateOn },
  { name: 'Category', width: 100, key: KeyTable.Category },
  { name: 'Status', width: 110, key: KeyTable.Status },
]

export const dataList = [{
  id: 1,
  questionId: "1",
  title: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
  statusName: "Draft",
  questionType: "Multi Select",
  questionCategory: "IELTS",
  creationTime: "2021-06-07"
}, {
  id: 2,
  questionId: "2",
  title: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  statusName: "Draft",
  questionType: "Select One",
  questionCategory: "IELTS",
  creationTime: "2021-03-18"
}, {
  id: 3,
  questionId: "3",
  title: "Aenean auctor gravida sem.",
  statusName: "Published",
  questionType: "Fill In the Gaps",
  questionCategory: "IELTS",
  creationTime: "2021-12-05"
}, {
  id: 4,
  questionId: "4",
  title: "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  statusName: "Published",
  questionType: "Select Many",
  questionCategory: "IELTS",
  creationTime: "2021-10-07"
}, {
  id: 5,
  questionId: "5",
  title: "Proin at turpis a pede posuere nonummy. Integer non velit.",
  statusName: "Draft",
  questionType: "Fill In the Gaps",
  questionCategory: "IELTS",
  creationTime: "2021-12-13"
}, {
  id: 6,
  questionId: "6",
  title: "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
  statusName: "Published",
  questionType: "Select Many",
  questionCategory: "IELTS",
  creationTime: "2022-01-11"
}, {
  id: 7,
  questionId: "7",
  title: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  statusName: "Published",
  questionType: "Matching",
  questionCategory: "IELTS",
  creationTime: "2021-07-10"
}, {
  id: 8,
  questionId: "8",
  title: "Ut tellus.",
  statusName: "Draft",
  questionType: "Select Many",
  questionCategory: "TOEIC",
  creationTime: "2021-08-29"
}, {
  id: 9,
  questionId: "9",
  title: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  statusName: "Draft",
  questionType: "Fill In the Gaps",
  questionCategory: "IELTS",
  creationTime: "2021-09-16"
}, {
  id: 10,
  questionId: "10",
  title: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
  statusName: "Draft",
  questionType: "Multi Select",
  questionCategory: "IELTS",
  creationTime: "2021-10-05"
}, {
  id: 11,
  questionId: "11",
  title: "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  statusName: "Draft",
  questionType: "Essay",
  questionCategory: "TOEIC",
  creationTime: "2021-12-26"
}, {
  id: 12,
  questionId: "12",
  title: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  statusName: "Published",
  questionType: "Multi Select",
  questionCategory: "TOEIC",
  creationTime: "2021-12-11"
}, {
  id: 13,
  questionId: "13",
  title: "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  statusName: "Draft",
  questionType: "Select One",
  questionCategory: "TOEIC",
  creationTime: "2021-06-13"
}, {
  id: 14,
  questionId: "14",
  title: "Donec posuere metus vitae ipsum. Aliquam non mauris.",
  statusName: "Draft",
  questionType: "Multi Select",
  questionCategory: "IELTS",
  creationTime: "2022-01-03"
}, {
  id: 15,
  questionId: "15",
  title: "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
  statusName: "Published",
  questionType: "Select Many",
  questionCategory: "IELTS",
  creationTime: "2021-06-02"
}, {
  id: 16,
  questionId: "16",
  title: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
  statusName: "Draft",
  questionType: "Fill In the Gaps",
  questionCategory: "TOEIC",
  creationTime: "2021-03-21"
}, {
  id: 17,
  questionId: "17",
  title: "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  statusName: "Draft",
  questionType: "Fill In the Gaps",
  questionCategory: "IELTS",
  creationTime: "2021-06-17"
}, {
  id: 18,
  questionId: "18",
  title: "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
  statusName: "Draft",
  questionType: "Select Many",
  questionCategory: "TOEIC",
  creationTime: "2021-06-03"
}, {
  id: 19,
  questionId: "19",
  title: "Etiam vel augue. Vestibulum rutrum rutrum neque.",
  statusName: "Published",
  questionType: "Essay",
  questionCategory: "IELTS",
  creationTime: "2021-09-29"
}, {
  id: 20,
  questionId: "20",
  title: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  statusName: "Published",
  questionType: "Essay",
  questionCategory: "TOEIC",
  creationTime: "2021-03-27"
}]