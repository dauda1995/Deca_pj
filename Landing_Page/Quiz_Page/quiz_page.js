$(document).ready(function () {

    let userid = localStorage.getItem('idobj')


    const myQuestions = []


    let quizContainer = $('#quiz')
    let resultContainer = $('#results')
    let submitButton = $('#submit')

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
            buildQuiz();
        })

    })

    function buildQuiz(){
        $.each(myQuestions, function(i, res){
            

        })
    }

})