$(document).ready(function () {
    let arr = []
    function usersInfo(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    function find_email(str) {
        let status = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == str) {
                // alert('this user already exists')
                status = true;
                break;

            } else {
                // alert('still checking')
                status = false;
            }
        }
        return status;
    }



    $('.signbtn').click(function () {
        //alert( 'this is working')

        //get user info from html elements
        let emailId = $('#email').val()
        let userId = $('#username').val()
        let passwordId = $('#pass').val()
        let passcheck = $('#pass2').val()


        //create user object
        var user = new usersInfo(emailId, userId, passwordId);
        let emailstr = user.email



        //get request to get users info from database
        $.get(' http://localhost:3000/users', function (data) {
            // alert('okay, this too')
            $.each(data, function (i, single) {
                // alert(single.email)
                arr.push(single.email)

            })
            //alert(arr)
            if (emailId.length !== 0) {
                if (passwordId.length !== 0) {

                    if (passwordId === passcheck) {
                        if (find_email(emailstr) == true) {
                            alert('you think you\'re smart')
                            arr = []
                        } else {
                            alert('Welcome! New user')
                            arr = []
                            alert(emailstr)
                            localStorage.setItem("idobj", emailstr)
                            // alert(localStorage.getItem('id'))
                            $.post("http://localhost:3000/users", user)

                            window.location = '../Landing_Page/Quiz_Page/add_quiz.html';
                            return false;
                        }
                    } else {
                        alert('wrong Inputs')
                    }
                }else{
                    alert('I\'m not even going to talk again ')
                }
            } else {
                alert("INVALID input")
            }
        })

    })



})