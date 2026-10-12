"use strict";

const dictionary = {
    en: {
        "привет": "hello",
        "мир": "world",
        "как дела": "how are you",
        "пока": "bye"
    },
    ru: {
        "hello": "привет",
        "world": "мир",
        "how are you": "как дела",
        "bye": "пока"
    }
};

function translate(text, lang) {
    let translations = dictionary[lang];

    if (!translations) {
        return text;
    }

    let result = text.toLowerCase();

    Object.keys(translations)
        .sort((a, b) => b.length - a.length)
        .forEach(phrase => {
            result = result.replaceAll(phrase, translations[phrase]);
        });
    return result;
}

console.log(translate("привет мир", "en"));
console.log(translate("Hello world", "ru"));
console.log(translate("Как дела?", "en"));
console.log(translate("пока мир", "en"));