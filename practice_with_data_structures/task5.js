"use strict";

const personal = {
    "Директор": "Алексей",
    "Менеджер": "Мария",
    "Инженер": "Игорь",
    "Бухгалтер": "Светлана"
};

const personal2 = Object.assign({}, personal);

personal2["Директор"] = "Олег";
personal2["Менеджер"] = "Анна";
personal2["Инженер"] = "Дмитрий";
personal2["Бухгалтер"] = "Елена";

function objectToString(obj) {
    let result = "";
    for (const key in obj) {
        result += key + ": " + obj[key] + "\n";
    }
    return result;
}

const personalText = objectToString(personal);
const personal2Text = objectToString(personal2);

console.log("Персонал:\n" + personalText);
console.log("Персонал 2:\n" + personal2Text)