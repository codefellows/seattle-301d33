page( "/", () => app.Task.fetchAll(app.tasksView.initIndexPage) );
page( "/task/:id",  ctx => app.tasksView.initTaskPage(ctx) );
page( "/add", ctx => app.tasksView.initAddPage(ctx) );

page('/admin',
  (ctx, next) => app.adminView.verify(ctx, next),
  (ctx) => app.adminView.initAdminPage());

page();


