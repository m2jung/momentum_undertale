const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//여기저기 반복되는 string은 변수로 저장 (오타 에러 예방)
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault ();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings(username){
    greeting.innerText = `어서오세요 ${username} 씨`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
}

loginForm.addEventListener("submit", loginSubmit);
 
const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings(saveUsername);
}