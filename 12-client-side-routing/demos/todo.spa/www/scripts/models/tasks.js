'use strict';

var app = {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'insert cloud API server URL here';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

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
    .then(Task.loadAll)
    .then(callback)
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

