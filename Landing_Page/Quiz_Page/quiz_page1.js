$(document).ready(function(){
  let userid = localStorage.getItem('idobj')
  //alert(userid)
 // alert(typeof (userid))
 //swal('Any fool can use a computer')


    let myQuestions = [];

    


    
    
    let quizContainer = document.getElementById('quiz');
    let resultsContainer = document.getElementById('results');
    let submitButton = document.getElementById('submit');

    
    
    $.get("http://localhost:3000/questions",function(data){
        
        
        $.each(data, function(i, single){
                myQuestions[i] = {
                question : single.question,
                answers:{
                    a: single.a,
                    b:single.b,
                    c:single.c,
                   

                },
                correctAnswer: single.answer,
                email: single.email

            }

            buildQuiz();   
           
          
       })
        
       
        
       
        

    })

     
       function buildQuiz(){
        
        let output = [];
      
        
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            let answers = [];
      
            // and for each answer...
            for(letter in currentQuestion.answers){
      
              // add radio button
              answers.push(
                `<br><label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label><br>`
              );
            }
      
            // add this question and its options to the output
            output.push(

              `<br><div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div><br>
                `
            );
          }
        );
      
        //  combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      }

      buildQuiz()
      
      function showResults(){
      
        // gather answer containers from our quiz
        let answerContainers = quizContainer.querySelectorAll('.answers');
      
        // keep track of user's answers
        let numCorrect = 0;
      
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
      
          // find selected answer
          let answerContainer = answerContainers[questionNumber];
          let selector = 'input[name=question'+questionNumber+']:checked';
          let userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          // if answer is correct
          if(userAnswer===currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
      
            // color the answers green
            answerContainers[questionNumber].style.backgroundColor = 'lightgreen';

        
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.backgroundColor = 'red';
          }
        });
      
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
        document.getElementById("ans").innerHTML = `answers:
                `;
      }
       submitButton.addEventListener('click', showResults);
   
       $('#logoutbtn').click(function(){
        localStorage.clear();
        window.location = '../Landing_page&Login.html';
        return false;
    })


      
 })
    
   
    
    
    