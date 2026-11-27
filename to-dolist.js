//d-flex justify-content-between align-items-center

let todoList =[]
let progressList=[]
let doneList=[]



function add(){
	let things = document.getElementById("values").value;

	let tasks = document.getElementById("tasks").value;

	if(things === '' || tasks ===''){
		alert("Enter the Content / select the option")
	}

	else{
		if(tasks === "ToDo"){
		console.log("work add to To-Do List")
		todoList.push({work:things})
		document.getElementById("todolist").innerHTML=
		[...todoList].reverse().map (p =>`<h5 draggable="true"
         ondragstart="drag(event)" class= "bg-info text-white p-2 m-2 rounded w-75 text-left mx-auto " ><span>${p.work}</span> </h5>`).join("")
		document.getElementById("values").value = "";
		document.getElementById("tasks").value = "";
			 
	}

	else if(tasks === "InProgress"){
		console.log("work add to In Progress List")
		progressList.push({work:things})
		document.getElementById("progress").innerHTML=
		[...progressList].reverse().map (p =>`<h5 draggable="true"
         ondragstart="drag(event)" class= "bg-info text-white p-2 m-2 rounded w-75 text-left mx-auto " ><span>${p.work}</span> </h5>`).join("")
		document.getElementById("values").value = "";
		document.getElementById("tasks").value = "";
		
	}
	
	else if(tasks === "Done"){
		console.log("work add to Done List")
		doneList.push({work:things})
		document.getElementById("done").innerHTML=
		[...doneList].reverse().map (p =>`<h5 draggable="true"
         ondragstart="drag(event)" class= "bg-info text-white p-2 m-2 rounded w-75 text-left mx-auto " ><span>${p.work}</span> </h5>`).join("")
		document.getElementById("values").value = "";
		document.getElementById("tasks").value = "";
		
	}
	else{}
	}

	
	
}
let draggedElement;

function drag(event) {
    draggedElement = event.target;
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    let task = draggedElement.innerText;

    todoList = todoList.filter(p => p.work !== task);
    progressList = progressList.filter(p => p.work !== task);
    doneList = doneList.filter(p => p.work !== task);

    if (event.currentTarget.id === "todolist") {
        todoList.push({work: task});
    }
    else if (event.currentTarget.id === "progress") {
        progressList.push({work: task});
    }
    else if (event.currentTarget.id === "done") {
        doneList.push({work: task});
    }

    event.currentTarget.appendChild(draggedElement);
}