const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

// 업데이트가 가능한 배열로 리스트 저장
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() 어떤 타입이던 문자열 배열형태로 저장
}

// 생성된 태그 삭제하기
function deleteToDo(event) {
    const li = event.target.parentElement; // 내가 클릭한 li 정보
    li.remove(); //화면에서만 삭제 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //데이터 삭제후 남김 - 같지 않은 것만 남김> (클릭것,li가 같은 건 삭제)
    saveToDo();
}

// 입력하면 태그가 생성 
function paintToDo(newToDo) {
    const li = document.createElement("li");//"li"라는 태그 생성,const 변수명은 다른 이름도 상관없음
    li.id = newToDo.id;
    const span = document.createElement("span"); //삭제 button을 또 만들기위해 span생성
    const button = document.createElement("button");
    span.innerText = newToDo.text;
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);//li는 자식으로 span을 갖는다
    li.appendChild(button);
    toDoList.appendChild(li);//#toDoList는 자식으로 li를 갖는다
}


// 입력 후 input 안에 비우기 
function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newToDo = toDoInput.value;
    toDoInput.value = ""; //input 칸에 text가 비워진다

    const newToDoObj = { //id,랜덤값을 가진 식별자 생성(localstore 데이터를 삭제할 수 있게 함)
        text: newToDo, 
        id: Date.now(), //긴 랜덤값
    };

    toDos.push(newToDoObj); //입력된 값은 배열(리스트)에 저장
    paintToDo(newToDoObj);
    saveToDo();
}
 
toDoForm.addEventListener("submit", handleToDoSubmit);



// 새로고침해도 저장된 리스트 보여주기
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //기존의 값을 가지고있던 배열에 추가
    parsedToDos.forEach(paintToDo); //배열에서 string으로 변환한 값들을 각각 function 줄 수 있게 한다(for의 반복문 역할)
    //parsedToDos.forEach((item) => console.log("ㅁㅁㅁ",item)); arrow function


}
