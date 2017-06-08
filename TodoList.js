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
  displayTodos: function() {
    console.log('My to dos:');
    if (this.todos.length > 0) {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoTask);
        }else {
          console.log('( )', this.todos[i].todoTask);
        }
      }
    }else {
      console.log('Your to do list is empty');
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoTask: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, NewTodoText) {
    this.todos[position].todoTask = NewTodoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
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
  displayTodos: function() {
    var callLists = displayTodos();
    displayToList.innerHTML = callLists
  },
  toggleAllButton: function() {
    todoList.toggleAll();
    handler.displayTodos();
  },
  addATodo: function() {
    var addTodoInput = document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    handler.displayTodos();
  },
  changeTodo: function() {
    var changeTodoInput = document.getElementById('changeTodoInput');
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    todoList.todos[changeTodoPosition.value - 1].todoTask = changeTodoInput.value;
    handler.displayTodos();
  }
}
