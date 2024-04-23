function sendmail() {
  const serviceID = "service_qr1dqsl";
  const templateID = "template_60gg3zn";
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  console.log("In");
  var params = {
    name: username,
    email: email,
  };

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("username").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}
