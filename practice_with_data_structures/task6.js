"use strict";

const subjects = {
    list: "Теория Вероятности, Программирование, Английский, Физра",

    addSubject(subject) {
        const subjectsArray = this.list.split(", ");

        if (!subjectsArray.includes(subject)) {
            subjectsArray.push(subject);

            this.list = subjectsArray.join(", ");
        }
        return this.list;
    },

    removeSubject(subject) {
        const subjectsArray = this.list.split(", ");
        const index = subjectsArray.indexOf(subject);
        if (index !== -1) {
            subjectsArray.splice(index, 1);
            this.list = subjectsArray.join(", ");
        }
        return this.list;
    }
};

console.log(subjects.list);

subjects.addSubject("Физика");
console.log(subjects.list);

subjects.addSubject("Математика");
console.log(subjects.list);

subjects.removeSubject("Физика");
console.log(subjects.list);

subjects.removeSubject("География");
console.log(subjects.list);
