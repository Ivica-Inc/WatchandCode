var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoTask: todoText,
      completed: false
    });
  },
  changeTodo: function(position, NewTodoText) {
    this.todos[position].todoTask = NewTodoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length
    var completedTodos = 0;

    // Get the number of completed todos
    this.todos.forEach(function(task) {
      if(task.completed === true) {
        completedTodos++;
      }
    })
    this.todos.forEach(function(task) {
    // if all todo items are set to completed
      if (completedTodos === totalTodos) {
        task.completed = false;
    // otherwise make all completed
      }else {
        task.completed = true;
      }
    })
  }
};

var handler = {
  addATodo: function() {
    var addTodoInput = document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoInput = document.getElementById('changeTodoInput');
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    todoList.todos[changeTodoPosition.valueAsNumber - 1].todoTask = changeTodoInput.value;
    view.displayTodos();
    changeTodoPosition.value = '';
    changeTodoInput.value = '';
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber -1);
    view.displayTodos();
    toggleCompletedPositionInput.value = '';
  },
  toggleAllButton: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
}

var view = {
  displayTodos: function() {
    var todoUl = document.querySelector('ul');
    todoUl.innerHTML = '';
    todoList.todos.forEach(function(task, position) {
      var todoLi = document.createElement('li');
      var displayTasks = '';
      var idNumber = 0;

      if(task.completed === true) {
        displayTasks = "(x)" + task.todoTask + ' ';
      }else {
        displayTasks = "( )" + task.todoTask + ' ';
      }
      todoLi.id = position;
      todoLi.textContent = displayTasks
      todoLi.appendChild(this.createDeleteButton())
      todoUl.appendChild(todoLi);
    }, this)
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

view.setUpEventListener();
