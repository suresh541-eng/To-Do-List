function addTask() {        //function declaration

  let input = document.getElementById("taskInput"); //input tag in call chesanu 

  let li = document.createElement("li"); //li tag create

  // checkbox 
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = function () {    // function expression
    li.classList.toggle("complete", checkbox.checked);//If true: complete class is added, If false: complete class is removed.
  };

  // span text
  let span = document.createElement("span");
  span.textContent = input.value;   //the user typed in the input box (taskInput) as the text inside that <span>.

  // remove button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";      // which content display
  delBtn.className = "delete-btn";  // class name of the button 
  delBtn.onclick = function () {    // function expression
    li.remove();
  };

  // checkbox + text + delete button li ki appending
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);


  // li append the taskList (ul)
  document.getElementById("taskList").appendChild(li);

  input.value = "";   //Assigning an empty string ""

};
