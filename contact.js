//function to toggle to contact pop up
/*let popUp_container = document.getElementById("container");
let popUp_overlay_container = document.getElementById("overlayCon");
let popUp_overlayBTN = document.querySelector(".overlayBtn");

popUp_overlayBTN.addEventListener('click', ()=> {
  popUp_container.classList.toggle('right-panel-active');
})*/

const form = document.getElementById('form');
const messengerName = document.getElementById('name');
const email = document.getElementById('email');
const subjectLine = document.getElementById('subjectLine');
const message = document.getElementById('message');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subjectLine_error = document.getElementById('subjectLine_error');
const message_error = document.getElementById('message_error');

const successfulFormPopup = document.getElementById('successful-form-popup')

emailjs.init("CSLrYE2i9yeJKRTpW");


form.addEventListener('submit',(e) => {
  let emailStatus = true;

  if (emailStatus) {
    if (messengerName.value === '' || messengerName.value === null) {
      e.preventDefault();
      name_error.innerHTML = "Name is required";
      emailStatus = false;

      //do not show line label
      document.querySelector('#lineLabel').style.backgroundColor = 'white';
    }else {
      name_error.innerHTML = "";
    }
  
    const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!email.value.match(emailRegex)) {
      e.preventDefault();
      email_error.innerHTML = "A valid email is required";
      emailStatus = false;

      //do not show line label
      document.querySelector('#lineLabel2').style.backgroundColor = 'white';
    }else {
      email_error.innerHTML = "";
    }
  
    if (subjectLine.value === '' || subjectLine.value === null) {
      e.preventDefault();
      subjectLine_error.innerHTML = "A descriptive subject line is required";
      emailStatus = false;

      //do not show line label
      document.querySelector('#lineLabel3').style.backgroundColor = 'white';
    }else {
      subjectLine_error.innerHTML = "";
    }
  
    if (message.value === '' || message.value === null) {
      e.preventDefault();
      message_error.innerHTML = "A message is required";
      emailStatus = false;
    }else {
      message_error.innerHTML = "";
    }
  }

  if (emailStatus) {
    //Send the email
    let params = {
      name : messengerName.value,
      email : email.value,
      subject : subjectLine.value,
      message : message.value,
    };
    emailjs.send("service_dkdhkqy", "template_d3ls77c", params)
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          //Display the success message
          form.style.display = "none";
          successfulFormPopup.style.display = "block";
          //e.preventDefault();
      }, (error) => {
          console.error('FAILED...', error);
          alert('There was an issue sending your message. Please try again later.');
      });

  }
})

const sendAnotherEmail = document.getElementById('sendAnotherEmail');
sendAnotherEmail.addEventListener('click', () => {
  //clear the form
  messengerName.value = "";
  email.value = "";
  subjectLine.value = "";
  message.value = "";

  //display the clear form
  form.style.display = "block";
  successfulFormPopup.style.display = "none";
});

// do not show the 
