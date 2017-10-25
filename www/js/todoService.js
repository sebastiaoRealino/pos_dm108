var TodoService = {

    todos: new Array(),

    getAll: function(){
        return this.todos;
    },

    getTodoByTitulo: function(titulo){
        for (var i = 0; i < this.todos.length; i++) {
            var index = this.todos[i].titulo.indexOf(titulo);
            if (index > -1) {
                return this.todos[i];
            }
        }
    },

    add: function(titulo, data, pronto) {
        var todo = new Todo(titulo, data, pronto);
        todo.id = this.todos.length;
        this.todos.push(todo);
    },

    remove: function(titulo){
        for (var i = this.todos.length - 1; i >= 0; i--) {
            var index = this.todos[i].titulo.indexOf(titulo);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
        
    },

    edit: function(todo){
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == todo.id) {
                this.todos[i] = todo;
                break;
            }
        }
    },

    setAsDone: function(titulo){
        for (var i = this.todos.length - 1; i >= 0; i--) {
            var index = this.todos[i].titulo.indexOf(titulo);
            if (index > -1) {
                this.todos[index].pronto = true;
            }
        }
    }
}