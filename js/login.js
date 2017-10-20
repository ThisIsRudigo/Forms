$(document).ready(function(){
  
          var url = "http://18.220.175.109/account/login";
  
            $("#login").click(function () {

              var data = { 
                "email": $("#email").val(),
                "password": $("#pwd").val()
              };


              if ($("#pwd").val().length < 6) {
                
                    $("#pwd").css("border-bottom", "1px solid red");
                    document.getElementById("pwd").focus();
                    $(".alert").css("display", "block");
              } else {

                $("#pwd").css("border-bottom", "1px solid white");
                $(".alert").css("display", "none");


                var data = { 
                  "email": $("#email").val(),
                  "password": $("#pwd").val()
                };
  


                  $.ajax({
                      url: url,
                      type: 'POST',
                      data: JSON.stringify(data),
                      contentType: 'application/json; charset=utf-8',
                      dataType: 'json',
                      async: false,
                      success: function (res) {
                          $("#result").html(res);
                          $("#pwd").css("border-bottom", "1px solid white");
                          $(".alert").css("display", "none");
                          $("#alerted").css("display", "none");
                          $("#alerte").css("display", "none");
                      },
                      error: function (res) {
                        if (res.responseJSON.error == "No user account exists with that email"){
                          $("#alerte").css("display", "block");
                        } else if (res.responseJSON.error == "Password is incorrect"){
                          $("#alerted").css("display", "block");
                        }
                      }
  
                  });

              }

      });
});