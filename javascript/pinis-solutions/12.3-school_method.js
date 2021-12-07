const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};
school.findPerson = (type, id) => {
  return school[type].find((person) => {
    return person.id === id;
  });
};

school.assignStudent = (studentId, subject) => {
  const student = school.findPerson("students", studentId);
  const teacher = school.teachers.find((teacher) => {
    return teacher.subjects.includes(subject) && teacher.capacityLeft;
  });
  if (teacher) {
    teacher.capacityLeft--;
    teacher.students.push(student);
    return teacher;
  } else {
    return console.log("Sorry no teachers");
  }
};
console.log(school);
school.assignStudent(13, "chemistry");
school.assignStudent(13, "chemistry");
school.assignStudent(13, "chemistry");
school.assignStudent(13, "chemistry");
console.log(school);

school.assignTeachersSubject = (teachersId, subject) => {
  const teacher = school.findPerson("teachers", teachersId);
  if (!teacher.subjects.includes(subject)) {
    teacher.subjects.push(subject);
    return teacher;
  }
};
console.log(school.assignTeachersSubject(1, "biology"));
