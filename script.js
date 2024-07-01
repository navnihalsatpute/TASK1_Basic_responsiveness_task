const androidbtn = document.getElementById('androidleave');

androidbtn.addEventListener('click', () => {
  if (androidbtn.textContent === 'Leave Group') {
    androidbtn.textContent = 'Join Group';
} else {
    androidbtn.textContent = 'Leave Group';
  }
});

const desktopregisterbtn = document.getElementById('desktopregisterbtn');
const desktopregisterpage = document.getElementById('desktopregister');

function disableScroll() { 
  document.body.classList.add("remove-scrolling"); 
} 

function enableScroll() { 
  document.body.classList.remove("remove-scrolling"); 
}

desktopregisterbtn.addEventListener('click', () => {
  desktopregisterpage.style.display = 'block';
  disableScroll();
});

const crossbtn = document.getElementById('crossbtn');

crossbtn.addEventListener('click', () =>{
  enableScroll();
  desktopregisterpage.style.display = 'none';
});

const signinbtn = document.getElementById('signinbtn');
const signinpage = document.getElementById('signin');
const signupbtn = document.getElementById('signupbtn');
const signuppage = document.getElementById('signup');

signinbtn.addEventListener('click', () =>{
  signinbtn.style.display = 'none';
  signupbtn.style.display = 'block';
  signinpage.style.display = 'block';
  signuppage.style.display = 'none';
});

signupbtn.addEventListener('click', () =>{
  signupbtn.style.display = 'none';
  signinbtn.style.display = 'block';
  signuppage.style.display = 'block';
  signinpage.style.display = 'none';
});

const androidregisterbtn = document.getElementById('androidregisterbtn');
const androidregisterpage = document.getElementById('androidregister');

androidregisterbtn.addEventListener('click', () =>{
  androidregisterpage.style.display = 'block';
});

const crossbtnandroid1 = document.getElementById('crossbtnandroid1');
const crossbtnandroid2 = document.getElementById('crossbtnandroid2');

crossbtnandroid1.addEventListener('click', () =>{
  androidregisterpage.style.display = 'none';
});
crossbtnandroid2.addEventListener('click', () =>{
  androidregisterpage.style.display = 'none';
});
const androidsigninbtn = document.getElementById('androidsigninbtn');
const androidsigninpage = document.getElementById('androidsignin');
const androidsignupbtn = document.getElementById('androidsignupbtn');
const androidsignuppage = document.getElementById('androidsignup');

androidsigninbtn.addEventListener('click', () =>{
  androidsigninbtn.style.display = 'none';
  androidsignupbtn.style.display = 'block';
  androidsigninpage.style.display = 'block';
  androidsignuppage.style.display = 'none';
});

androidsignupbtn.addEventListener('click', () =>{
  androidsignupbtn.style.display = 'none';
  androidsigninbtn.style.display = 'block';
  androidsignuppage.style.display = 'block';
  androidsigninpage.style.display = 'none';
});

const joinButton = document.getElementById('desktopjoin');
const leaveButton = document.getElementById('desktopleave');

joinButton.addEventListener('click', () => {
  joinButton.style.display = 'none';
  leaveButton.style.display = 'inline-block';
});

leaveButton.addEventListener('click', () => {
  leaveButton.style.display = 'none';
  joinButton.style.display = 'inline-block';
});

