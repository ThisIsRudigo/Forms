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
                          alert("successfully logged in");
                          $("#result").html(res);
                      },
                      error: function (res) {
                        $("#email").html(res);
                        alert(res.error);
                      }
  
                  });

              }

      });
});