

page( "/", () => app.Task.fetchAll(app.tasksView.initIndexPage) );
page( "/task/:id",  ctx => app.tasksView.initTaskPage(ctx) );
page( "/add", ctx => app.tasksView.initAddPage(ctx) );

page();