document.querySelector(".addNew-task").addEventListener("click", function () {
  const add = document.querySelector(".add-task");
  if (add.style.display === "none" || add.style.display === "") {
    add.style.display = "flex";
  } else {
    add.style.display = "none";
  }
});

const inputBox = document.querySelector(".box");
const taskContainer = document.querySelector(".task-container");
const inputSubject = document.querySelector("#subject");
const inputDescription = document.querySelector("#description");
const inputStatus = document.querySelector("#status");
const inputPriority = document.querySelector("#priority")

function addTask() {
  if (inputSubject.value === "" && inputDescription.value === "") {
    inputSubject.style.color = "red";
    inputDescription.style.color = "red";
  } else {
    // const task = document.createElement(".task-title");

    // task.innerHTML = `
    // <div class="task-title">
    //     <p class="title">${inputStatus.value}</p>
    //     <p class="title">${inputDescription.value}</p>
    //     <p class="title">${inputSubject.value}</p>
    //     <p class="title">${inputPriority.value}</p>
    //     <input
    //     id="description"
    //         type="text"
    //         placeholder="Add your text"
    //         class="box box2 hoyr"
    //     />
    // </div>
    // `;

    let li = document.createElement("li");
    li.innerHTML = inputSubject.value;
    li.innerHTML = inputDescription.value;
    li.innerHTML = inputStatus.value;
    li.innerHTML = inputPriority.value;
    taskContainer.appendChild(li);

    // buh textuudee oruulaad "add task" button deer darval haagdana.
    const add = document.querySelector(".add-task");
    if (add.style.display === "flex") {
      add.style.display = "none";
    } else {
      add.style.display = "flex";
    }
  }
}
