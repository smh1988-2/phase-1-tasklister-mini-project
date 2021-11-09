createNewTaskButton = document.querySelector("#create-task-form");
createNewTaskButton.addEventListener("submit", addEvent)

let today = new Date().toISOString().slice(0, 10)

//array to hold the count of tasks
let submissions = []

function addEvent(e) {
  e.preventDefault()

  // create a new <li>, add the text value from the description box, and create a new button
  const newLi = document.createElement("li");

  const newTask = document.querySelector("#new-task-description").value;

  const taskNotes = document.querySelector("#new-task-info").value;

  //gets date from form and appends it to a string for display
  const dueDateValue = document.querySelector("#due-date").value
  const dueDate = `Due Date: ${dueDateValue}`;

  //get priority from form 
  const newTaskPriority = document.querySelector("#task-priority").value;

  //takes the inputs and updates newLi depending on if notes and/or a date is present
  if (taskNotes.length > 0 && dueDate.length > 12) { //have note and date
    newLi.innerHTML =`<span class="tooltip">${newTask} <span class="tooltiptext">${taskNotes}</span></span> - ${newTaskPriority} <br /> ${dueDate} <br />`
  } else if (taskNotes.length > 0 && dueDate.length === 10) { //have note no date
    newLi.innerHTML =`<span class="tooltip">${newTask} <span class="tooltiptext">${taskNotes}</span></span> - ${newTaskPriority}`
  } else if (taskNotes.length <= 0 && dueDate.length > 12) { //no note no date
    newLi.innerHTML =`${newTask} - ${newTaskPriority} <br /> ${dueDate} <br />`
  } else { //fallback
    newLi.innerHTML =`${newTask} - ${newTaskPriority} <br />`
  }

  //create the delete button
  const button = document.createElement("button");
  button.innerHTML = "Delete this task";
  button.addEventListener("click", deleteTask);

  // check if the date is blank and throws an alert and stops the function if it is
  if (dueDateValue === today) {
    alert("Due date is today. Good luck!")}
   else if (dueDateValue.length > 2 && dueDateValue < today) {
    alert("Due date can't be in the past, McFly")
    return }
  
  if (newTask === "") { //checks that the text field is filled
    alert("You need to enter a new task description, dummy")
    return
  } else {
    if (newTaskPriority === "High") { //set the font color based on priority
      //newLi.className = "high";
      newLi.style.color = "#572824";
    }
    if (newTaskPriority === "Medium") {
      newLi.className = "medium";
      newLi.style.color = "#fbcc5f";
    }
    if (newTaskPriority === "Low") {
      newLi.className = "low";
      newLi.style.color = "#a3ccc8";
    }
    
    document.querySelector("ul").appendChild(newLi); //append new task and delete button to the <ul>
    document.querySelector("ul").appendChild(button);
    increaseTaskSubmissions();

    const toDoCounter = document.querySelector("#counter");
    const taskCount = submissions.length;
    if (taskCount === 0) { //checks how many tasks and displays "thing/things" correctly
    toDoCounter.innerHTML = `You have ${taskCount} things to do.`;
    } else if (taskCount === 1) {
    toDoCounter.innerHTML = `You have ${taskCount} thing to do.`;
    } else if (taskCount > 1) {
      toDoCounter.innerHTML = `You have ${taskCount} things to do.`;
    }
  }

  //reset the text fields
  document.querySelector("form").reset();
}

//add element to the task counter array. We only care about length.
function increaseTaskSubmissions() {
  submissions.push("1")
}
 //removes element from the task counter array. We only care about length.
function reduceTaskSubmissions() {
  submissions.shift();
}

function deleteTask(e) { 
  e.target.previousSibling.remove(); //remove the previous sibling (our task name)
  e.target.remove(); //remove the button
  reduceTaskSubmissions()
  const toDoCounter = document.querySelector("#counter");
  const taskCount = submissions.length;
  if (taskCount === 0) { //checks how many tasks and displays "thing/things" correctly
    toDoCounter.innerHTML = `You have ${taskCount} things to do.`;
    } else if (taskCount === 1) {
    toDoCounter.innerHTML = `You have ${taskCount} thing to do.`;
    } else if (taskCount > 1) {
      toDoCounter.innerHTML = `You have ${taskCount} things to do.`;
    }
  console.log("Ya DONE")//create message on completed tasks?
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