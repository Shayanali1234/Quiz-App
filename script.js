const quizData = [
    {
        question: "Which of the following is NOT a commonly used front-end programming language?",
        a : "HTML",
        b: "CSS",
        c: "Python",
        d: "JavaScript",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which CSS property is used to change the color of text?",
        a: "font-color",
        b: "text-color",
        c: "color",
        d: "textColor",
        correct: "c"
    },

    {
        question: "What is the correct syntax for commenting in CSS?",
        a: "/* This is a comment */",
        b: "<!-- This is a comment -->",
        c: "// This is a comment //",
        d: "// This is a comment",
        correct: "a"
    },

    {
        question: "Which HTML tag is used to define an unordered list?",
        a: "<ul>",
        b: "<ol>",
        c: "<list>",
        d: "<li>",
        correct: "a"
    },
    {
        question: "What is the purpose of the `addEventListener` method in JavaScript?",
        a: "To perform mathematical calculations",
        b: "To add styles to elements",
        c: "To handle events like clicks or keypresses",
        d: "To manipulate the DOM structure",
        correct: "c"
    },
    {
        question: "Which CSS property is used to control the spacing between lines of text?",
        a: "line-height",
        b: "font-spacing",
        c: "text-spacing",
        d: "spacing",
        correct: "a"
    },
    {
        question: "What is the correct way to link an external CSS stylesheet to an HTML document?",

        a: "<link rel='stylesheet' type='text/css' href='style.css'>",
        b: "<style src='style.css'></style>",
        c: "<import src='style.css'>",
        d: "@include 'style.css'",
        correct: "a"

    },



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})