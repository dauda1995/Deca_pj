$(document).ready(function(){

    function getUser(user, email, pass){
        this.user = user;
        this.email = email;
        this.pass = pass;
    }


    
    var email_search = getUser.email
    function validate(){
        for(let word of emails){
            if(word == email){
                alert('this user already exist')
                return false;
            }
            
        }
        // $.post(" http://localhost:3000/users", userVal,function(data){
         // alert(data)
         // })
         alert('big baby')

        
    }

    $('.signbtn').click(function(){
        var emails = []
        var user = $('#username').val()
        var email = $('#email').val()
        var pass = $('#pass').val()
        var pass2 = $('#pass2').val()

        if(user ==='dauda' && pass === pass2 && email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            var userVal = new getUser(user, email, pass)
            //Enter code for username validation against user database

            //get user info posted to database first
            console.log(userVal)

            // $.post(" http://localhost:3000/users", userVal,function(data){
            //     alert(data)
            // })

            $.ajax({
                type: 'GET',
                url : ' http://localhost:3000/users',
                success: function(result){
                    $.each(result, function(i,res){
                        emails.push(res.email)
                        alert (typeof(emails))
                    })

                }
            }) 
            alert (emails)
            validate()
           
           // $.post("http://localhost:3000/users", userVal)

            
            alert('Sign up successful')
            //window.location = 'C:\Users\dauda\Videos\repositories\repo_mock_api\Landing_Page\Quiz_Page\quiz_page.html';
            //return false; 

        }else{
            alert('wrong info entered')
        }    
        })

    $('.cancel').click(function(){
        alert('done')
    })

    
})