'use strict';
const taskTrigger = document.getElementById('task-trigger');
const taskValue = document.getElementById('task-value');
const taskTable = document.getElementById('table');
const todos = [];

const createStatusButton = (todo,status,row) => {
    const statusButton = document.createElement('button');
    statusButton.innerText = todo.status;
    status.appendChild(statusButton);
  statusButton.addEventListener('click',()=>{

    if(todo.status === '完了'){
      todo.status = '作業中';
      showTasks();
    }else{
    todo.status = "完了";
   showTasks();
    }
  })
}
const createRemoveButton = (remove,row) => {
  const removeButton = document.createElement('button');
  removeButton.innerText = '削除';
  remove.appendChild(removeButton);
  removeButton.addEventListener('click',()=>{
    const index = row.rowIndex - 1;
    todos.splice(index,1);
      showTasks();
  })
}
const showTasks = () => {
  taskTable.innerText = '';
  todos.forEach((todo) => {
    const taskId = taskTable.rows.length;
    const row = taskTable.insertRow(-1);
    row.classList.add('tasks');
    if (todo.status === '完了') {
      row.classList.add('finish');
    }

    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const remove = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = todo.task;
    createStatusButton(todo,status,row);
    createRemoveButton(remove,row);
    
  })
  
}

const radio = document.getElementsByName('radio_button');
radio.forEach((e)=>{
  e.addEventListener('click',()=>{


  if (radio[1].checked) {

    const taskRow = document.querySelectorAll('.finish');
    const taskDis = document.querySelectorAll('.tasks');
    const taskFin = document.querySelectorAll('.tasks finish');
    
    console.log(taskRow)
    taskFin.forEach((r)=>{
      r.style.display = 'none';
    })
    taskDis.forEach((r)=>{
      r.style.display = 'block';
    })
    taskRow.forEach((r)=>{

      r.style.display = 'none';
    })

    
    

  } else if (radio[2].checked) {
    const taskRow = document.querySelectorAll('.tasks');
    const taskDis = document.querySelectorAll('.finish');
    console.log(taskRow)
    taskRow.forEach((r)=>{
      r.style.display = 'none';
    })
    taskDis.forEach((r)=>{
      r.style.display = 'block';
    })
    
  } else {
    const taskDis = document.querySelectorAll('.tasks');
    taskDis.forEach((r)=>{
      r.style.display = 'block';
    })
  }
})
})
taskTrigger.addEventListener('click', () => {
  const task = { task: taskValue.value, status: '作業中' }
  todos.push(task);
  showTasks();
  taskValue.value = '';
})

