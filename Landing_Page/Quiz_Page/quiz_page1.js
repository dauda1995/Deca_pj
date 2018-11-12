$(document).ready(function(){

        let myQuestions = []
        let myAnswers = []

        const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

        $.get("http://localhost:3000/questions",function(data){
        alert('loaded'),
        //alert(data['choices'])
        $.each(data, function(i, single){
                myQuestions[i] = {
                question : single.question,
                answer: single.answer
            }

            myAnswers[i] = {
                a: single.a,
                b: single.b,
                c: single.c,
            }
        })
        console.log(myQuestions)
        console.log(myAnswers)
        buildQuiz()



    })

    function buildQuiz(){
        const output =[];
       
        myAnswers.forEach(
         (currentQuestion, questionNumber) => {
            const answers = []
            const que = []
            let n =0
            
            
            for(letter in currentQuestion){
                
                
                answers.push(
                    `<br><label>
                     <input type ="radio" name="question${questionNumber}" value="${letter}">
                     ${letter} :
                     ${currentQuestion[letter]}
                     </label><br><br>`
                )
                n++
            }
            output.push(
               // myQuestions.forEach(currentQuest, questNumb) => {

               // }
                `<div class="question">${myQuestions[n].question} </div>
                <div class="answers"> ${answers.join('')}</div>`
                
            )
        

            }  
    )
    
    quizContainer.innerHTML = output.join('');

    }

    


})