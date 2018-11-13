$(document).ready(function(){
    let ques = $('#question')
    let opt1 = $('#opt_1')
    let opt2 = $('#opt_2')
    let opt3 = $('#opt_3')
    let ans = $('#answer')

    function clear(){
        ques.val("")
        opt1.val("")
        opt2.val("")
        opt3.val("")
        ans.val("")
    }
    let arr =[]
   




    // function questionSet(question, choices, answer){
    //     this.question = question
    //     this.choices = choices
    //     this.answer = answer
    // }

    // function choiceSet(opt_1, opt_2, opt_3){
    //     this.opt_1 = opt_1
    //     this.opt_2 = opt_2
    //     this.opt_3 = opt_3
    // }
    // function post_method(url, data){
    //     $.post(url,data, function(res){
    //         alert('work finished')
        
    //     })
    // }

    $('#submit').click(function(){
        let questdiv = $('#question').val()
        let opt_1div = $('#opt_1').val()
        let opt_2div = $('#opt_2').val()
        let opt_3div = $('#opt_3').val()
        let answerdiv = $('#answer').val()

       // let options_new = new choiceSet(opt_1div, opt_2div, opt_3div)
       // let question_new = new questionSet(questdiv,options_new,answerdiv)
        let question_new = {
            "question" : questdiv,
              
                "a": opt_1div,
                "b": opt_2div,
                "c": opt_3div,
                "answer": answerdiv,
       }
        //let set1 = question_new
        //console.log(question_new);
        //console.log(question_new.choices)
        //alert(set1.question);
      
          

       
        $.post('http://localhost:3000/questions', question_new, function(data){
            clear()
            alert('done!')
        })

        
        

    })

    $('#testPage').click(function(){
        alert('alright, Let\'s do this!')
    })

   // $('#Update').click(function(){
       $.get("http://localhost:3000/questions",function(data){
           //alert('okay')
           $.each(data, function(i, single){
               arr[i] = {
                   question : single.question,
                   id: single.id

               } 


                            
           })
           console.log(arr)
           for(let i=0; i<arr.length; i++){
            $('#selectOps').append('<option value="' + arr[i].id + '">' + arr[i].question + '</option>');
        }
    
       })   

       $('#Update').click(function(){
        let optionSelect = $('#selectOps').val();
        alert(optionSelect)
       })
      


   // }
    //)


})

   