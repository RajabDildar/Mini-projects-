//DOM elements
const inputBox = document.querySelector("#inputBox");
const addTaskBtn = document.querySelector(".addTaskBtn");

function addToDo() {
  if (inputBox.value !== "") {
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    let ToDo_inputBox = document.createElement("input");
    ToDo_inputBox.type = "text";
    ToDo_inputBox.name = "ToDo_inputBox";
    ToDo_inputBox.readOnly = true;
    ToDo_inputBox.value = inputBox.value;

    let completeBtn = document.createElement("img");
    completeBtn.src = "images/checked.png";
    completeBtn.classList.add("completeBtn");

    let deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-delete-24.png";
    deleteBtn.classList.add("deleteBtn");

    document.querySelector(".secTwo h2").append(ul);
    ul.prepend(li);
    li.appendChild(ToDo_inputBox);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    ul.style.marginBlock = "2rem";

    //adding event listener to complete button
    completeBtn.addEventListener("click", (evt) => {
      let li = evt.target.parentElement;
      li.remove();
      let ul = document.createElement("ul");
      document.querySelector(".secThree h2").append(ul);
      ul.prepend(li);
      console.log(li);
      li.childNodes[1].remove();
    });

    //adding event listener to delete button
    deleteBtn.addEventListener("click", (evt) => {
      let li = evt.target.parentElement;
      li.remove();
    });

    inputBox.value = "";
    inputBox.focus();
  } else {
    inputBox.focus();
  }
}

addTaskBtn.addEventListener("click", addToDo);

//using enter key to click on addTaskBtn botton
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    addTaskBtn.click();
  }
});
