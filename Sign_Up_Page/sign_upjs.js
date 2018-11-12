$(document).ready(function(){
    let arr = []
    function usersInfo(email, username, password){
        this.email = email;
        this.username = username;
        this.password = password;
    }
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
   
    $('.signbtn').click(function(){
        alert( 'this is working')

        //get user info from html elements
        let emailId = $('#email').val()
        let userId = $('#username').val()
        let passwordId = $('#pass').val()
                
        
        //create user object
        var user =new usersInfo(emailId, userId, passwordId);
        let emailstr= user.email
               
        //get request to get users info from database
        $.get(' http://localhost:3000/users', function(data){
            alert('okay, this too')
            $.each(data, function(i,single){
               // alert(single.email)
                arr.push(single.email)
            
            })
            alert(arr)
           
            if(find_email(emailstr)==true){
                alert('this user already exists')
                arr = []
            }else{
                alert('no users')
                arr=[]
                $.post("http://localhost:3000/users",user)
               // export {emailstr}
                window.location = '../Landing_Page/Quiz_Page/quiz_page.html';
                return false;
            }   

            
                
                
            
        })
    
    })
})