$(document).ready(function(){

    function questionSet(question, choices, answer){
        this.question = question
        this.choices = choices
        this.answer = answer
    }

    function choiceSet(opt_1, opt_2, opt_3){
        this.opt_1 = opt_1
        this.opt_2 = opt_2
        this.opt_3 = opt_3
    }
    function post_method(url, data){
        $.post(url,data, function(res){
            alert('work finished')
        
        })
    }

    $('#submit').click(function(){
        let questdiv = $('#question').val()
        let opt_1div = $('#opt_1').val()
        let opt_2div = $('#opt_2').val()
        let opt_3div = $('#opt_3').val()
        let answerdiv = $('#answer').val()

        let options_new = new choiceSet(opt_1div, opt_2div, opt_3div)
        let question_new = new questionSet(questdiv,options_new,answerdiv)
        // let question_new = {
        //     "question" : questdiv,
        //     "choices" : {
        //         "a": opt_1div,
        //         "b": opt_2div,
        //         "c": opt_3div,
        //     },
        //     "answer": answerdiv,
       // }
        let set1 = question_new
        console.log(question_new);
        console.log(question_new.choices)
        alert(set1.question);
        
        post_method("http://localhost:3000/questions", set1)
       // $.post('http://localhost:3000/questions', {name:'dauda'})
        
        

    })


})