var todoList = {
  todos: [{
    todoTask: 'first',
    completed: false
  },
  {
    todoTask: 'second',
    completed: false
  },
  {
    todoTask: 'third',
    completed: false
  }
],
  addTodo: function(todoText) {
    this.todos.push({
      todoTask: todoText,
      completed: false
    });
    view.displayTodos();
  },
  changeTodo: function(position, NewTodoText) {
    this.todos[position].todoTask = NewTodoText;
    view.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    view.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    view.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length
    var allTrue = 0;

    // Get the number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        allTrue++;
      }
    }
    // if all todo items are set to completed
    if (allTrue === totalTodos) {
        for (i = 0; i < totalTodos; i++) {
          this.todos[i].completed = false;
        }
    // otherwise make all completed
    }else {
      for (i = 0; i < totalTodos; i++) {
          this.todos[i].completed = true;
        }
    }
    view.displayTodos();
  }
};

function displayTodos () {
  var display = ''
  for (var i = 0; i < todoList.todos.length; i++) {
    if (todoList.todos[i].completed === true) {
      display = display + "<li/>" + "(x) " + todoList.todos[i].todoTask + "</li>";
    }else {
      display = display + "<li/>" + "(  ) " + todoList.todos[i].todoTask + "</li>";
    }
  }
  return display
}

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
  deleteTodo: function() {
    var deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber -1);
    view.displayTodos();
    deleteTodoPosition.value = '';
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
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var displayTasks = '';

      if (todoList.todos[i].completed === true) {
        displayTasks = "(x)" + todoList.todos[i].todoTask;
      }else {
        displayTasks = "( )" + todoList.todos[i].todoTask;
      }
      todoLi.textContent = displayTasks
      todoUl.appendChild(todoLi);
    }
  }
};
