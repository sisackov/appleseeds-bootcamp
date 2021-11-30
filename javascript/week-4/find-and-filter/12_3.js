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

/**
 * @param {string} type 'teachers' or 'students'
 * @param {number} id persons id
 * @returns {object} person object
 */
function findPerson(type, id) {
    return school[type].find(person => person.id === id);
}
// console.log(findPerson('teachers', 2));
// console.log(findPerson('students', 12));


/**
 * Assign student to the first available teacher who 
 * teaches that subject and who is not in full capacity. If all of 
 * the teachers are in full capacity log to the console “Sorry, no available teachers left”
 * 
 * @param {number} id 
 * @param {string} subject
 */
function assignStudent(id, subject) {
    let available = school.teachers.filter(teacher => teacher.subjects.find(subj => subj === subject))
        .find(teacher => teacher.capacityLeft > 0);//returns undefined if not found

    if (available) {
        available.students.push(findPerson('students', id));
        available.capacityLeft--;
    } else {
        console.log('“Sorry, no available teachers left');
    }
}
console.log(findPerson('teachers', 1));
assignStudent(12, 'chemistry');
console.log(findPerson('teachers', 1));



/**
 * Assigns the new subject to that particular teacher if that 
 * subject doesn’t exist in their array of subjects
 * @param {string} teacherId 
 * @param {string} newSubject 
 * @returns {boolean} true if succesfully assigned newSubject
 */
function assignTeachersSubject(teacherId, newSubject) {
    let teacher = findPerson('teachers', teacherId);
    if (teacher && !teacher.subjects.find(subj => subj === newSubject)) {
        teacher.subjects.push(newSubject);
        return true;
    }
    return false;
}
console.log(findPerson('teachers', 2));
assignTeachersSubject(2, 'advanced math');
console.log(findPerson('teachers', 2));



/**
 * Removes student from the students array and updates
 * all teachers that had that student in their students list
 * 
 * @param {number} studentId
 * @returns {boolean} true if succesfully removed student
 */
function removeStudent(studentId) {
    let studIndex = school.students.findIndex(student => student.id === studentId);

    if (studIndex > -1) {
        //first we get an array of all the teachers that have the student in their student list
        let relevantTeachers = school.teachers.filter(teacher => teacher.students
            .find(student => student.id === studentId));
        relevantTeachers.forEach((teacher) => {
            //remove the student id from students list and decrement capacity
            let idx = teacher.students.findIndex(student => student.id === studentId);
            teacher.students.splice(idx, 1);
            teacher.capacityLeft++;
        });

        school.students.splice(studIndex, 1);
        return true;
    }
    return false;
}
console.log(school.teachers);
console.log(school.students);
removeStudent(12);
console.log(school.teachers);
console.log(school.students);
