'use strict'

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 7
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

// 1. Создать строку из названий предметов написаных через запятую

function getSubjectName() {

    // 1 способ
    let subjectName = []
    for (const subject in subjects) {
        subjectName.push(subject)
    }
    console.log(subjectName.join(', '));

    // 2 способ
    console.log(Object.keys(subjects).join(', '));
}
getSubjectName()

// 2. Посчитать общее количнство студентов и учителей на всех предметах

function getTotalPeople() {

    // 1 способ
    let totalStudents = Object.values(subjects).map(elem => elem.students).reduce((sum, elem) => sum + elem)
    let totalTeachers = Object.values(subjects).map(elem => elem.teachers).reduce((sum, elem) => sum + elem)
    let totalPeople = totalStudents + totalTeachers
    
    console.log(totalPeople);

    // 2 способ
    let result = Object.values(subjects).map(elem => Object.values(elem).reduce((sum, elem) => sum + elem)).reduce((sum, elem) => sum + elem)

    console.log(result);
}
getTotalPeople()

// 3. Получить среднее количество студентов на всех пердметах

function getAverageStudents() {
    let result = Object.values(subjects).map(elem => elem.students).reduce((sum, elem) => sum + elem) / Object.keys(subjects).length

    console.log(result);
}
getAverageStudents()

// 4. Создать массив из объектов предметов

function arraySubjects() {
    console.log(Object.values(subjects));

    let subjectName = []
    for (let subject in subjects) {
        subject = {subject}
        subjectName.push(subject)
    }
    console.log(subjectName);
}
arraySubjects()

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

function arraySortSubjects() {    
    let result = [];
    Object.keys(subjects)
    .sort((a, b) => subjects[b].teachers - subjects[a].teachers)
    .forEach(elem => result[elem] = subjects[elem]);

    console.log(Object.keys(result));
}
arraySortSubjects()