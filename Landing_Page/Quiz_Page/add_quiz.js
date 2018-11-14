$(document).ready(function(){
    let ques = $('#question')
    let opt1 = $('#opt_1')
    let opt2 = $('#opt_2')
    let opt3 = $('#opt_3')
    let ans = $('#answer')
    let urlq =""
    

    function clear(){
        ques.val("")
        opt1.val("")
        opt2.val("")
        opt3.val("")
        ans.val("")
    }
    let arr =[]
   function append(question, opta, optb, optc, a){
      
    ques.val(question)
    opt1.val(opta)
    opt2.val(optb)
    opt3.val(optc)
    ans.val(a)
   }

//    jQuery.each(["put", "delete"], function(i, method){
//    jQuery[method] = function(url, data, callback, type){
//     if(jQuery.isFunction(data)){
//         type = type || callback
//         callback = data;
//         data = undefined;
//     }
//     return jQuery.ajax({
//         url: url,
//         type: method,
//         dataType: type,
//         data: data,
//         success: callback
//     })
//     }
//    })

   $('#Add').click(function(){

    clear()
    $('#submitUpdate').click(function(){
        let questdiv = ques.val()
        let opt_1div = opt1.val()
        let opt_2div = opt2.val()
        let opt_3div = opt3.val()
        let answerdiv = ans.val()

      
        let question_new = {
            "question" : questdiv,
              
                "a": opt_1div,
                "b": opt_2div,
                "c": opt_3div,
                "answer": answerdiv,
       }
        $.post('http://localhost:3000/questions', question_new, function(data){
             alert('done!')
        }) 
        clear()   
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
       //update data  

       $('#Update').click(function(){
        let optionSelect = $('#selectOps').val();
        urlq = "http://localhost:3000/questions/" + optionSelect
        $.get(urlq, function(data){
            let ques=data.question
            let opt1= data.a
            let opt2 = data.b
            let opt3 = data.c
            let ans = data.answer
        
           
            append(ques, opt1, opt2, opt3, ans)
                      
        })
        //Submit updated data
        $('#submitUpdate').click(function(){

            let questdivu = ques.val()
            let opt_1divu = opt1.val()
            let opt_2divu = opt2.val()
            let opt_3divu = opt3.val()
            let answerdivu = ans.val()
            alert(urlq)
        
            let updateQuestion = {
                "question" : questdivu,
                  
                    "a": opt_1divu,
                    "b": opt_2divu,
                    "c": opt_3divu,
                    "answer": answerdivu,
           }
           
    
           $.ajax({
               type: 'PUT',
               url: urlq,
               data: updateQuestion,
               dataType: 'JSON',
               success: function(data){
                   alert('done!')
    
               }
           })
         
        
        })

        
       })

       $('#Delete').click(function(){
        let optionSelect = $('#selectOps').val();
        urlq = "http://localhost:3000/questions/" + optionSelect
        $.get(urlq, function(data){
            let ques=data.question
            let opt1= data.a
            let opt2 = data.b
            let opt3 = data.c
            let ans = data.answer
        
           
            append(ques, opt1, opt2, opt3, ans)
                      
        })
        $('#submitUpdate').click(function(){

            let questdivu = ques.val()
            let opt_1divu = opt1.val()
            let opt_2divu = opt2.val()
            let opt_3divu = opt3.val()
            let answerdivu = ans.val()
            alert(urlq)
        
            let updateQuestion = {
                "question" : questdivu,
                  
                    "a": opt_1divu,
                    "b": opt_2divu,
                    "c": opt_3divu,
                    "answer": answerdivu,
           }
           
    
           $.ajax({
               type: 'DELETE',
               url: urlq,
               data: updateQuestion,
               dataType: 'JSON',
               success: function(data){
                   alert('done!')
    
               }
           })
         
        
        })



       })

   


})

   