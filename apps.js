new Vue({
  el: '#tasks',

  data: {
    tasks: [],
    newTask: ''
  },

  filters: { // bo loc
    inProcess: function(tasks){
      return tasks.filter(function(task){
        return ! task.completed;
      });
    }
  },

  computed: { // tinh toan
    completions: function(){
      return this.tasks.filter(function(task){
        return task.completed;
      });
    },

    remaining: function(){
      return this.tasks.filter(function(task){
        return ! task.completed;
      });
    }
  },

  methods: {
    addTask: function(e){
      e.preventDefault();// ko gui dl len sever
      if(! this.newTask) return;
      this.tasks.push({
        body: this.newTask,
        completed: false
      });
      this.newTask = '';
    },

    removeTask: function(task){
      this.tasks.$remove(task);
    },

    editTask: function(task){
      this.tasks.$remove(task);//xoa nv
      this.newTask = task.body;// cap nhat nv
      this.$els.newtask.focus();// dua con tro vao
    },

    completeTask: function(task){
      task.completed = true;
    },

    completeAll: function(){
      this.tasks.forEach(function(task){
        task.completed = true;
      })
    },

    toggleCompleteTask: function(task){
      task.completed = ! task.completed;
    },

    clearCompleted: function(){
      this.tasks = this.tasks.filter(function(task){
        return ! task.completed;
      })
    }
  }
});
