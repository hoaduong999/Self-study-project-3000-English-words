// import vocabularyList from './vocabularyList.js';

// const checkButton = document.getElementById('checkButton');
// const inputWord = document.getElementById('inputWord');
// const resultMessage = document.getElementById('result');
// const resultMessage2 = document.getElementById('result2');
// const resultMessage3 = document.getElementById('result3');
// const vocabularyElement = document.getElementById('vocabulary');
// const pronounceElement = document.getElementById('pronounce');
// const typesOfWordsElement = document.getElementById('Types_of_words');
// const totalVocabularyCount = Object.keys(vocabularyList).length;

// let currentIndex = 0;

// function displayVocabulary(vocabulary) {
//     vocabularyElement.textContent = vocabulary.meaning;
//     pronounceElement.textContent = 'Phát âm: ' + vocabulary.pronounce;
//     typesOfWordsElement.textContent = vocabulary.Types_of_words;
//     resultMessage3.textContent = 'Tổng số từ vựng: ' + totalVocabularyCount;

//     const currentVocabularyIndexElement = document.getElementById('currentVocabularyIndex');
//     if (currentVocabularyIndexElement) {
//         currentVocabularyIndexElement.remove();
//     }

//     const newVocabularyIndexElement = document.createElement('div');
//     newVocabularyIndexElement.id = 'currentVocabularyIndex';
//     newVocabularyIndexElement.textContent = `Số từ vựng đang học: ${currentIndex + 1}`;

//     typesOfWordsElement.insertAdjacentElement('afterend', newVocabularyIndexElement);
// }

// function resetGame() {
//     inputWord.value = '';
//     resultMessage.textContent = '';
//     resultMessage.classList.remove('correct', 'incorrect');
//     resultMessage2.textContent = '';
// }

// function checkWord() {
//     const inputWordValue = inputWord.value.trim().toLowerCase();
//     const vocabulary = vocabularyList[currentIndex];
//     const isCorrect = inputWordValue === vocabulary.word.toLowerCase();

//     resultMessage.textContent = isCorrect
//         ? `Correct! The word "${vocabulary.word}" means "${vocabulary.meaning}".`
//         : 'Incorrect! Please try again.';
//     resultMessage.classList.add(isCorrect ? 'correct' : 'incorrect');
//     resultMessage.classList.remove(isCorrect ? 'incorrect' : 'correct');
//     resultMessage2.textContent = isCorrect ? '' : 'Bạn đã sai, từ chính xác là: ' + vocabulary.word;

//     if (isCorrect) {
//         currentIndex = (currentIndex + 1) % totalVocabularyCount;
//         setTimeout(() => {
//             displayVocabulary(vocabularyList[currentIndex]);
//             resetGame();
//         }, 2000);
//     }
// }

// displayVocabulary(vocabularyList[currentIndex]);
// checkButton.addEventListener('click', checkWord);

// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================
// =======================================

import vocabularyList from './vocabularyList.js';

const checkButton = document.getElementById('checkButton');
const inputWord = document.getElementById('inputWord');
const resultMessage = document.getElementById('result');
const resultMessage2 = document.getElementById('result2');
const resultMessage3 = document.getElementById('result3');
const vocabularyElement = document.getElementById('vocabulary');
const pronounceElement = document.getElementById('pronounce');
const typesOfWordsElement = document.getElementById('Types_of_words');
const overlay = document.getElementById('overlay');
const overlayMessage = document.getElementById('overlayMessage');
const totalVocabularyCount = Object.keys(vocabularyList).length;

let currentIndex = 0;

function displayVocabulary(vocabulary) {
    vocabularyElement.textContent = vocabulary.meaning;
    pronounceElement.textContent = 'Phát âm: ' + vocabulary.pronounce;
    typesOfWordsElement.textContent = vocabulary.Types_of_words;
    resultMessage3.textContent = 'Tổng số từ vựng: ' + totalVocabularyCount;

    const currentVocabularyIndexElement = document.getElementById('currentVocabularyIndex');
    if (currentVocabularyIndexElement) {
        currentVocabularyIndexElement.remove();
    }

    const newVocabularyIndexElement = document.createElement('div');
    newVocabularyIndexElement.id = 'currentVocabularyIndex';
    newVocabularyIndexElement.textContent = `Số từ vựng đang học: ${currentIndex + 1}`;

    typesOfWordsElement.insertAdjacentElement('afterend', newVocabularyIndexElement);
}

function resetGame() {
    inputWord.value = '';
    resultMessage.textContent = '';
    resultMessage.classList.remove('correct', 'incorrect');
    resultMessage2.textContent = '';
}

function showOverlayMessage(message) {
    overlayMessage.textContent = message;
    overlay.classList.add('show');
}

function hideOverlay() {
    overlay.classList.remove('show');
}

function checkWord() {
    const inputWordValue = inputWord.value.trim().toLowerCase();
    const vocabulary = vocabularyList[currentIndex];
    const isCorrect = inputWordValue === vocabulary.word.toLowerCase();

    resultMessage.textContent = isCorrect
        ? `Correct! The word "${vocabulary.word}" means "${vocabulary.meaning}".`
        : 'Incorrect! Please try again.';
    resultMessage.classList.add(isCorrect ? 'correct' : 'incorrect');
    resultMessage.classList.remove(isCorrect ? 'incorrect' : 'correct');
    resultMessage2.textContent = isCorrect ? '' : 'Bạn đã sai, từ chính xác là: ' + vocabulary.word;

    if (isCorrect) {
        currentIndex = (currentIndex + 1) % totalVocabularyCount;
        setTimeout(() => {
            displayVocabulary(vocabularyList[currentIndex]);
            resetGame();
        }, 2000);

        showOverlayMessage(`Chính xác xin chúc mừng :))`);
    }
}

function closeOverlay() {
    hideOverlay();
}

displayVocabulary(vocabularyList[currentIndex]);
checkButton.addEventListener('click', checkWord);
overlay.addEventListener('click', closeOverlay);
