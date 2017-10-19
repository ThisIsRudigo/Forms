$(document).ready(function(){
  
          var url = "http://18.220.175.109/account/register/business";
  
            $("#register").click(function () {

              var data = { 
                "name": $("#name").val(),
                "email": $("#email").val(),
                "password": $("#pwd").val(),
                "businessType": $("#type").val()
              };


                  $.ajax({
                      url: url,
                      type: 'POST',
                      data: JSON.stringify(data),
                      contentType: 'application/json; charset=utf-8',
                      dataType: 'json',
                      async: false,
                      success: function (res) {
                          alert("successfully created an account");
                          $("#result").html(res);
                      },
                      error: function (res) {
                        $("#email").html(res);
                        alert(res.error);
                      }
  
                  });
              });
      });