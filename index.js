//Question/Answer Bank to store data - 10 Questions total
const STORE = [
    {
        questionText: 'What is the temperature of the hottest planet in our solar system?',
        questionChoice: [
            '400 Degrees C',
            '450 Degrees C',
            '500 Degress C',
            '550 Degress C'
        ],
        questionAnswer: 1,
    },

    {
        questionText: 'When will Halleys Comet pass Earth again?',
        questionChoice: [
            '2024',
            '2052',
            '2061',
            '2077'
        ],
        questionAnswer: 3,
    },
   
    {
        questionText: 'How fast can neutron stars spin?',
        questionChoice: [
            '400 times per second',
            '500 times per second',
            '600 times per second',
            '700 times per second'
        ],
        questionAnswer: 2,
    },

    {
        questionText: 'In how many years will the Milky Way and Andromeda Galaxies collide?',
        questionChoice: [
            '375,000 years',
            '3.75 million years',
            '3.75 billion years',
            '3.75 trillion years'
        ],
        questionAnswer: 2,
    },

    {
        questionText: 'How wide is the largest known asteroid?',
        questionChoice: [
            '400 miles across',
            '500 miles across',
            '600 miles across',
            '700 miles across'
        ],
        questionAnswer: 2,
    },

    {
        questionText: 'The mass of the Sun takes up what percent of the solar system?',
        questionChoice: [
            '43.17%',
            '55.21%',
            '87.44%',
            '99.86%'
        ],
        questionAnswer: 3,
    },

    {
        questionText: 'What is the visible part of the sun called?',
        questionChoice: [
            'The Stratosphere',
            'The Atmosphere',
            'The Photosphere',
            'The Lithosphere'
        ],
        questionAnswer: 2,
    },

    {
        questionText: 'What term describes the alignment of three celestial bodies?',
        questionChoice: [
            'Syzygy',
            'Sizzle',
            'Symbology',
            'Suzerainty'
        ],
        questionAnswer: 0,
    },

    {
        questionText: 'Approximately how many miles are there in a light year?',
        questionChoice: [
            '590,000 miles',
            '5.9 million miles',
            '5.9 billion miles',
            '5.9 trillion miles'
        ],
        questionAnswer: 3,
    },

    {
        questionText: 'Which is the name of a radio source that is very far from Earth?',
        questionChoice: [
            'Phaser',
            'Tracer',
            'Taser',
            'Quasar'
        ],
        questionAnswer: 3,
    }
];

// Variables used
let currentQuestionNumber = 0;
let totalNumberOfQuestion = STORE.length;
let totalScore = 0

// Function to start the Quiz
function startQuiz() {
    $('.start-button').click(function () {
        $('.start-section').hide();
        $('.question-section').show();
        $('.final-section').hide();
        console.log('startQuiz ran');
        currentQuestionNumber = 0;
        console.log('currentQuestionNumber');
    })
};

// Function to Reset the quiz - back to the start page
function tryAgain() {
    $('.reset-button').click(function () {
        location.reload();
    })
};

function checkAnswer() {
    let userAnswer = $('input[class="answer"]:checked').val();
    console.log($('input[class="answer"]:checked'));
    let correctAnswer = STORE[currentQuestionNumber].questionAnswer;
    console.log(correctAnswer, userAnswer);
    if (userAnswer == correctAnswer) {
        totalScore++;
        console.log(totalScore);
    }
    else {
        console.log(totalScore)
    };
};

function questionDisplay() {
    $('.question').text(STORE[currentQuestionNumber].questionText);
    console.log('questionDisplay ran', currentQuestionNumber);
    questionStatus();
    scoreStatus();
};

function answersDisplay() {
    $('.answers-container').empty();
    const amountOfAnswers = STORE[currentQuestionNumber].questionChoice.length;
    for (let i = 0; i < amountOfAnswers; i++) {
        $('.answers-container').append(
            `<input class='answer' type="radio" name='answer' value='${i}' required>${STORE[currentQuestionNumber].questionChoice[i]}<br />`
        );
        console.log(i);
    }
    console.log('answersDisplay ran');
};

function questionStatus() {
    $('.question-circle').empty();
    $('.question-circle').append(
        `<p class= 'question-status'>Question ${currentQuestionNumber + 1} out of 10</p>`
    );
};

function scoreStatus() {
    $('.score-circle').empty();
    $('.score-circle').append(
        `<p>Score ${totalScore} out of 10</p>`
    );
    console.log('scoreStatus ran');
    console.log(totalScore);
};

function submit() {

    $('#next_button').click(function(event){
        event.preventDefault();
        if ((currentQuestionNumber + 1) == totalNumberOfQuestion) {
            checkAnswer();
            $('.final-score-container').empty();
            $('.final-score-container').append(
                `<p> Final Score: ${totalScore} out of 10</p>`
            );
            $('.start-section').hide();
            $('.question-section').hide();
            $('.final-section').show();
            scoreStatus();
            
        } else {
            checkAnswer();
            currentQuestionNumber++;
            questionDisplay();
            answersDisplay();
            console.log(totalScore);
        }
        
        $('.response').text('');
        $("#next_button").hide();
        $("#submit_button").show();
    });

    $('#answers_form').submit(function (event) {
        event.preventDefault();
        let userAnswer = $('input[class="answer"]:checked').val();
        let correctAnswer = STORE[currentQuestionNumber].questionAnswer;
        if (userAnswer == correctAnswer) {
            $('.response').text('Correct! The answer is' + ' ' + STORE[currentQuestionNumber].questionChoice[correctAnswer]);
        } else {
            $('.response').text('Incorrect, the answer is' + ' ' + STORE[currentQuestionNumber].questionChoice[correctAnswer]);
        }
        
        $("#submit_button").hide();
        $("#next_button").show();  
    });
};


function functionsHandler() {
    $('.question-section').hide();
    $('.final-section').hide();
    startQuiz();
    tryAgain();
    checkAnswer();
    questionDisplay();
    answersDisplay();
    questionStatus();
    scoreStatus();
    submit();
};


$(functionsHandler);


