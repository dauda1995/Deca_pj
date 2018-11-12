let myQuestions = []
       

        const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

        $.get("http://localhost:3000/questions",function(data){
        alert('loaded'),
        //alert(data['choices'])
        $.each(data, function(i, single){
                myQuestions[i] = {
                question : single.question,
                answers:{
                    a: single.a,
                    b:single.b,
                    c:single.c

                },
                correctAnswer: single.answer

            }

            
           
          
        })
      
        console.log(myQuestions)


    })





function buildQuiz(){
        let output = []
        let answers = []
    for(let i= 0; i<myAnswers.length; i++){
        output.push(myQuestions[i].question)
        alert(output)
   }
}
  

