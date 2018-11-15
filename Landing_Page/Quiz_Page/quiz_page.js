$(document).ready(function () {

    let userid = localStorage.getItem('idobj')


    const myQuestions = []


    let quizContainer = $('#quiz')
    let resultContainer = $('#results')
    let submitButton = $('#submit')

    let questiondiv = $('#question')
    let adiv = $('#a')
    let bdiv = $('#b')
    let cdiv = $('#c')

    $.get("http://localhost:3000/questions", function (data) {


        $.each(data, function (i, single) {
            myQuestions[i] = {
                question: single.question,
                answers: {
                    a: single.a,
                    b: single.b,
                    c: single.c,

                },
                correctAnswer: single.answer,
                email: single.email
            }
            
        })
        buildQuiz();

    })

    function buildQuiz(){[]
        let output = 
       myQuestions.forEach((currentQuestion, questionNumber)=>{
           let answers = []

           for(letters in currentQuestion.answers){
               answers.push(
                    `<label>
                    <input type = 'radio' name="question${questionNumber}" value="${letters}">
                    ${letters}: 
                        ${currentQuestion.answers[letter]}
                        </label>` 
               )

           }
           output.push(
               `<div class = "question" >${currentQuestion.question}</div>
               <div class = 'answers>${answers.join('')}</div><br> `

           )

       }
       )
    quizContainer.innerHtml = output.join('')
    }
   
function checkanswer(){

    let answerContainer = quizContainer.querySelector('.answers')
    let numCorrect = 0
    myQuestions.forEach((currrentQuestion, questionNumber)=>{
        let ans  = answerContainer[questionNumber]
        let selector = `input[name = question${questionNumber}]:checked`
        let userAns = (answerContainer.querySelector(selector) || {}).value;

        if (userAns ===currentQuestion.correctAnswer){
            numCorrect++
        }else{
            answerContainers[questionNumber].style.backgroundColre= green;
        }




    })
    resultContainer.innerHtml = numCorrect + 'out of ' + myQuestions.length + "\n" + "answers:" ;
    
}
    submitButton.on(click, showResults)
})