$(document).ready(function(){

    let arr = []
    let arr2 = []
    function usersInfo(email, password){
        this.email = email
        this.password = password
    }

    //validator against server data
    function find_email(str){
        let status = true;
        for( let i = 0; i<arr.length;i++){
            if(arr[i] == str){
               // alert('this user already exists')
                status = true;
                break;
                
        }else{
           // alert('still checking')
            status = false;
        }
        }
        return status;
    }
    function find_password(passw){
        let status = true;
        for( let i = 0; i<arr2.length;i++){
            if(arr2[i] == passw){
               // alert('this user already exists')
                status = true;
                break;
                
        }else{
           // alert('still checking')
            status = false;
        }
        }
        return status;
    }

   $('#login').click(function(){
    var usernameId = $('#username').val();
    var passwordId = $('#password').val();
    //alert(username)
    //alert(password)
    var user = new usersInfo(usernameId, passwordId)
    let emailstr = user.email
    let passStr = user.password

    if((passwordId !=='empty') && (usernameId.match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/))){
        

        $.get(' http://localhost:3000/users', function(data){
            alert('okay, this too')
            $.each(data, function(i,single){
               // alert(single.email)
                arr.push(single.email)
                arr2.push(single.pass)
                alert(single.pass)
            })
             if((find_email(emailstr)==true) && (find_password(passStr) == true)){
                alert('Login successful')
                alert('welcome bro')
                arr = []
                arr2 = []
                window.location = 'Quiz_Page/add_quiz.html';
                //return false;

            }else{
                alert('incorrect')
                arr = []
                arr2 = []
            }


      
        })

        
            
       
    }else{
        alert('incorrect password or username')
    }
    

   })
  


})