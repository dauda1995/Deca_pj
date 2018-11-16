$(document).ready(function(){
    localStorage.clear()
    

    let arr = []
    let arr2 = []
    function usersInfo(email, password){
        this.email = email
        this.password = password
    }

    //validator against server data
    function find_email(str, pstr){
        // alert(arr[0].emailt)
        // alert(arr[0].passwordt)
        let status = true;
        for( let i = 0; i<arr.length;i++){
            if((arr[i].emailt == str) && (arr[i].passwordt ==pstr)){
                status = true;
                break;
                               
        }else{
           
            status = false;
        }
        }
        return status;
    }
    // function find_password(passw){
    //     let status = true;
    //     for( let i = 0; i<arr2.length;i++){
    //         if(arr2[i]== passw){
              
    //             status = true;
    //             break;
                
    //     }else{
           
    //         status = false;
    //     }
    //     }
    //     return status;
    // }

   $('#login').click(function(){
    var usernameId = $('#username').val();
    var passwordId = $('#password').val();
    
    
    var user = new usersInfo(usernameId, passwordId)
    let emailstr = user.email
    let passStr = user.password

    if((passwordId !=='empty') && (usernameId.match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/))){
        

        $.get(' http://localhost:3000/users', function(data){
           // alert('okay, this too')
            $.each(data, function(i,single){
               // alert(single.email)
               // arr.push(single.email)
               arr.push({
                   emailt:single.email,
                   idt: single.id,
                   passwordt: single.pass
               })

               // arr2.push(single.pass)
                //alert(single.pass)
             
            })
             if(find_email(emailstr, passStr)==true){
                 localStorage.setItem('idobj', emailstr)
                 
                 
              //  swal('Login successful')
               // alert('welcome bro')
                arr = []
                arr2 = []
                window.location = 'Quiz_Page/add_quiz.html';
                //return false;

            }else{
                // swal({
                //     type: 'error',
                //     title: 'Oops...',
                //     text: 'Wrong Username or Password!',
                //     footer: '<a href>Why do I have this issue?</a>'
                //   })
                arr = []
                arr2 = []
            }


      
        })

        
            
       
    }else{
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Wrong Username or Password!',
            footer: '<a href>Why do I have this issue?</a>'
          })
    }
    

   })
  


})