createNewTaskButton = document.querySelector("#create-task-form");
createNewTaskButton.addEventListener("submit", addEvent)

function addEvent(e) {
  e.preventDefault()

  // create a new <li>, add the text value from the description box, and create a new button
  const newLi = document.createElement("li");
  const newTask = document.querySelector("#new-task-description").value;

  //get priority from form 
  const newTaskPriority = document.querySelector("#task-priority").value;

  newLi.innerText = newTask + " - " + newTaskPriority;
  newLi.className = "my-task"

  //create the delete button
  const button = document.createElement("button");
  button.innerHTML = "Delete this task";
  button.addEventListener("click", deleteTask);

  // check if the description box is blank and throws an alert if it is, or adds our newTask
  if (newTask === "") {
    alert("You need to enter a new task description, dummy")
  } else {
    if (newTaskPriority === "High") { //set the font color based on priority
      newLi.className = "high";
      newLi.style.color = "red";
    }
    if (newTaskPriority === "Medium") {
      newLi.className = "medium";
      newLi.style.color = "yellow";
    }
    if (newTaskPriority === "Low") {
      newLi.className = "low";
      newLi.style.color = "green";
    }
    document.querySelector("ul").appendChild(newLi); //append new task and delete button to the <ul>
    document.querySelector("ul").appendChild(button);
  }

  //reset the text field
  document.querySelector("form").reset();
}

function deleteTask(e) { //if you do it the other way around it won't have a previous sibling!
  e.target.previousSibling.remove(); //remove the previous sibling (our task name)
  e.target.remove(); //remove the button
}



//STRETCH STUFF I COULDN'T MAKE WORK!

//   const editButton = document.createElement("button");
//   editButton.innerHTML = "Edit";
//   editButton.className = "edit-button";
//   editButton.addEventListener("click", showEditField)

//   const editForm = document.createElement("div") 
//   editForm.innerHTML = `<form id="edit-task-form" action="">
//   <input type="text" id="task-edit" name="task-edit" placeholder="what's your edit?">
//   <input type="submit" value="Submit Edit" id="submit-edit">
// </form>`;

//   function showEditField(e) {
//     e.preventDefault();
//     this.parentNode.insertBefore(editForm, this)
//     this.nextSibling.remove(); //hide previous Edit button when showing edit field?
    
//     submitEditButton = document.querySelector("#submit-edit");
//     submitEditButton.addEventListener("submit", updateTask);
//   }

    //document.querySelector("ul").appendChild(editButton);

    // function updateTask () {
      //   e.preventDefault();
      //   editedTask = document.querySelector("#task-edit").value;
      //   console.log("Hello")
      // }