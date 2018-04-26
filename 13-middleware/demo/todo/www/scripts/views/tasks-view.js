'use strict';

(function(module) {

  const tasksView = {};

  tasksView.initIndexPage = function(ctx) {
    console.log("index");
    $('#items ul').empty();
    show('items');
    app.Task.all.forEach(task =>
      $('#items ul').append(task.toHtml())
    );
  }

  tasksView.initAddPage = function(ctx) {
    if(localStorage.token) {
      console.log('add');
      show('add');
    }
    else {
      console.log('not logged in, going to admin');
      page('/admin');
    }
  };

  tasksView.initTaskPage = function(ctx) {
    console.log('view task', ctx.params.id);
    $('#task').empty();
    show('task');
    app.Task.all.forEach(task => {
      if ( parseInt(task.id) === parseInt(ctx.params.id) ) {
        $('#task').append(task.detailToHtml())
      }
    });

  }

  $('#add form').on('submit', createNewTask);
  function createNewTask(e) {
    e.preventDefault();
    let task = { task: e.target.task.value };
    $.post( `${ENV.apiUrl}/api/v1/tasks`, task)
     .then(app.Task.fetchAll(tasksView.initIndexPage))
     .catch(console.error);
  }

  module.tasksView = tasksView;


})(app);
