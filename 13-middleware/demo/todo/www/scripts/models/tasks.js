'use strict';

(function(module) {

  function Task(obj) {

    Object.assign(this, obj);

  }

  Task.all = [];

  Task.prototype.toHtml = function() {
    let template = Handlebars.compile($('#task-template').text());
    return template(this);
  };

  Task.prototype.detailToHtml = function() {
    let template = Handlebars.compile($('#task-detail-template').text());
    return template(this);
  };

  Task.loadAll = rows => Task.all = rows.map(task => new Task(task));

  // callback is going to be: app.tasksView.initIndexPage
  Task.fetchAll = callback => {
    $.get(`${ENV.apiUrl}/api/v1/tasks`)
    .then( allTasks => Task.loadAll(allTasks) )  /// [{}, {}]
    .then( tasks => callback(tasks) )
    .catch(errorCallback);
  };

  Task.add = task => {
    $.post(`${ENV.apiUrl}/tasks/add`, task)
    .then(() => page('/'))
    .catch(errorCallback);
  };

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  };

  module.Task = Task;

})(app);

