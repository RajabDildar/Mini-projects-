//DOM elements
const inputBox = document.querySelector("#inputBox");
const addTaskBtn = document.querySelector(".addTaskBtn");
let heading = document.querySelector(".heading");

function addToDo() {
  if (inputBox.value !== "") {
    //creating ul and li
    let ul = document.createElement("ul");
    let li = document.createElement("li");

    //creating input box
    let ToDo_inputBox = document.createElement("input");
    ToDo_inputBox.type = "text";
    ToDo_inputBox.name = "ToDo_inputBox";
    ToDo_inputBox.readOnly = true;
    ToDo_inputBox.value = inputBox.value;

    //creating completeBtn
    let completeBtn = document.createElement("img");
    completeBtn.src = "images/checked.png";
    completeBtn.classList.add("completeBtn");

    //creating deleteBtn
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "images/icons8-delete-24.png";
    deleteBtn.classList.add("deleteBtn");

    //creating edit_btn
    let edit_btn = document.createElement("div");
    edit_btn.innerText = "Edit";
    edit_btn.classList.add("edit_btn");

    //adding elements
    document.querySelector(".secTwo").append(ul);
    ul.prepend(li);
    li.appendChild(ToDo_inputBox);
    li.appendChild(edit_btn);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    //adding event listener to complete button
    completeBtn.addEventListener("click", (evt) => {
      let li = evt.target.parentElement;
      li.parentElement.remove();
      let ul = document.createElement("ul");
      document.querySelector(".secThree").append(ul);
      ul.prepend(li);
      li.childNodes[2].remove();
      li.childNodes[1].remove();

      //creating deleteAllBtn
      if (heading.childNodes.length === 3) {
        let deleteAllBtn = document.createElement("div");
        deleteAllBtn.innerText = "Delete All";
        deleteAllBtn.classList.add("deleteAllBtn");
        heading.append(deleteAllBtn);

        //adding event listener to deleteAllBtn
        deleteAllBtn.addEventListener("click", () => {
          let allUl = document.querySelectorAll(".secThree ul");
          for (let i = 0; i < allUl.length; i++) {
            allUl[i].remove();
          }
          deleteAllBtn.remove();
        });
      }
    });

    //adding event listener to delete button
    deleteBtn.addEventListener("click", (evt) => {
      let li = evt.target.parentElement;
      li.parentElement.remove();
    });

    //adding event listener to edit_btn
    edit_btn.addEventListener("click", (evt) => {
      if (evt.target.innerText === "Edit") {
        ToDo_inputBox.readOnly = false;
        ToDo_inputBox.focus();
        evt.target.innerText = "Done";
      } else if (evt.target.innerText === "Done") {
        ToDo_inputBox.readOnly = true;
        evt.target.innerText = "Edit";
      }
    });

    inputBox.value = "";
    inputBox.focus();
  } else {
    inputBox.focus();
  }
}

//adding event listener to addTaskBtn
addTaskBtn.addEventListener("click", addToDo);

//using enter key to click on addTaskBtn botton
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    addTaskBtn.click();
  }
});
