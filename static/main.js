let senddata = {
  "Sender": "Grant",
  "To": "Node-Server",
  "Password": "NodeSender12",
  "data": []
}



  $(".pass").attr({
    "type": "password"
  });

  $(".flexer").on("click", function() {
    $(".images").css({
      "filter": "blur(8px)"
    });
  })

  $(".images").on("click", function() {
    $(".images").css({
      "filter": "blur(0px)"
    });
    $(".user").attr({
      "placeholder": "Please Enter Username"
    });
    $(".pass").attr({
      "placeholder": "Please Enter Password"
    });
  })



  $(".form-sub").on("submit", function() {
console.log("worked submit")
    // data for the events and dates
    var username1 = $(".inputs .user").val();
    var password1 = $(".inputs .pass").val();
    var username2 = md5(username1)
    var password2 = md5(password1)

    senddata.data.push(username2);
    senddata.data.push(password2);

    //return false;


    grabAndPut()
    console.log(senddata.data)

  })



  function grabAndPut() {
    console.log("worked grabAndPut")
    $.ajax({
      method: 'POST',
      url: '/peoples',
      data: JSON.stringify(senddata),
      contentType: 'application/json',
      success: function() {
        console.log("has sent the data to localhost:3000 " + senddata)
      }
    })
  }
