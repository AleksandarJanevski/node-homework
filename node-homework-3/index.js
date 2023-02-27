const fs = require("fs");

const readData = () => {
  return new Promise((success, fail) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) return fail(err);
      return success(JSON.parse(data));
    });
  });
};

const writeData = (data) => {
  return new Promise((success, fail) => {
    fs.writeFile("./data.json", JSON.stringify(data, null, " "), (err) => {
      if (err) return fail(err);
      success();
    });
  });
};

const getAllStudents = async () => {
  try {
    let students = await readData();
    console.log(students);
  } catch (err) {
    console.log("Error getting students ", err);
  }
};

// getAllStudents();

// - треба да додадеме студент во фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. треба да ги додадете податоците на студентот во низата | Array.push
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

const insertStudent = async (data) => {
  try {
    let students = await readData();
    students.push(data);
    await writeData(students);
    console.log(students);
  } catch (err) {
    console.log(err);
  }
};

// insertStudent({
//   ime: "Pero",
//   prezime: "Perovski",
//   prosek: 9.2,
//   grad: "Bitola",
// });

// - Името на студентот треба да биде сменето од ААА во ААБ
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа/објект | JSON.parse
// 3. да ги измините сите елементи во низата и да направите промена само на соодветниот член | Array.map
// 4. низата од js низа/објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

const modifyStudent = async (index, data) => {
  try {
    let students = await readData();
    // students[index] = data;
    let modifiedStudent = students.map((item, i) =>
      i === index ? data : item
    );
    await writeData(modifiedStudent);
    console.log(modifiedStudent);
  } catch (err) {
    console.log(err);
  }
};

// modifyStudent(0, {
//   ime: "Pero",
//   prezime: "Perovski",
//   prosek: 8.1,
//   grad: "Bitola",
// });

// - треба да се избрише студент од фајлот
// 1. да ја вчитате целата содржина од фајлот | fs.readFile
// 2. да ја конвертирате содржината од обичен текст во js низа / објект | JSON.parse
// 3. да ги измините сите елементи во низата и да го избришете само соодветниот член | Array.filter
// 4. низата од js низа / објект треба да биде конвертирана во текст | JSON.stringify
// 5. текстот треба да биде зачуван во фајлот | fs.writeFile

const deleteStudent = async (index) => {
  try {
    let students = await readData();
    // students.splice(index, 1);
    let deletedStudent = students.filter((item, i) => i !== index);
    await writeData(deletedStudent);
    console.log(deletedStudent);
  } catch (err) {
    console.log(err);
  }
};

// deleteStudent(1);

/*

(async () => {
    let students = await getAllStudent();
    console.log(students);

    // додавање
    await insertStudent({ime: "Pero", prezime: "Perovski", prosek: 9.2, grad: "Bitola"});

    let students = await getAllStudent();
    console.log(students); // да го има Pero во листата

    // модификација
    await modifyStudent(0, {ime: "Pero", prezime: "Perovski", prosek: 8.1, grad: "Bitola"});

    let students = await getAllStudent();
    console.log(students); // да биде сменет просекот на Pero

    // бришење
    await deleteStudent(0);

    let students = await getAllStudent();
    console.log(students); // Pero да го нема во листата
})();




*/
