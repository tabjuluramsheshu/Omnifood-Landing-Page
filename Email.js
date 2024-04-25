// function sendmail() {
//   const serviceID = "service_qr1dqsl";
//   const templateID = "template_60gg3zn";
//   let username = document.getElementById("username").value;
//   let email = document.getElementById("email").value;
//   console.log("In");
//   var params = {
//     name: username,
//     email: email,
//   };

//   emailjs
//     .send(service_qr1dqsl, template_60gg3zn, params)
//     .then((res) => {
//       document.getElementById("username").value = "";
//       document.getElementById("email").value = "";
//       console.log(res);
//       alert("Your message sent successfully!!");
//     })
//     .catch((err) => console.log(err));
// }

function sendmail() {
  // const serviceID = "service_qr1dqsl";
  // const templateID = "template_60gg3zn";
  // let username = document.getElementById("username").value;
  // let email = document.getElementById("email").value;
  // console.log("In");
  var params = {
    to_name: document.getElementById("username").value,
    email_id: document.getElementById("email").value,
  };

  emailjs.send(service_qr1dqsl, template_v2zz24m, params).then(function (res) {
    alert("Email Sent!!" + res.status);
  });
}
