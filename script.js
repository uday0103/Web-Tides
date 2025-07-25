function sendmail() {
    var parms = {
        from_name: document.getElementById("username").value,
        eamil_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_25xrz5r", "template_ce4x2hd".parms).then(function (res) {
        alert("Success!!!" + res.status);
    })
}