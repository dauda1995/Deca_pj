$(document).ready(function(){

//    var username = $('#username').val();
//    var password = $('#password').val();
   //alert(username)
   //alert(password)
   $('#login').click(function(){
    var username = $('#username').val();
    var password = $('#password').val();
    //alert(username)
    //alert(password)
    if(username ==='dauda933@gmail.com' && password ==='dauda' && username.match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        alert('Login successful')
        $.get("http://localhost:3000/posts/",function(result){
            alert(result);
        });

        //window.location = 'Quiz_Page/quiz_page.html';
        //return false;
    }else{
        alert('invalid username and password');
 
    }

   })
  


})