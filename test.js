var view = {
  displayTodos: function() {
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var displayTasks = '';

      if (todoList.todos[i].completed === true) {
        displayTasks = "(x)" + todoList.todos[i].todoTask + ' ';
      }else {
        displayTasks = "( )" + todoList.todos[i].todoTask + ' ';
      }
      todoLi.id = i;
      todoLi.textContent = displayTasks
      todoLi.appendChild(this.createDeleteButton())
      todoUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListener: function() {
    var todoUi = document.querySelector('ul');

    todoUi.addEventListener('click', function(event){
      if (event.target.className === 'deleteButton') {
          var position = parseInt(event.target.parentElement.id);
          handler.deleteTodo(position);
        }
    })
  }
};
