import express from "express";
// import serveStatic from 'serve-static';
import cors from "cors";

import todos from "./routes/todo.js";
const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(
  express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 10000 })
);

app.use(cors());

// serve client
// app.use('/', serveStatic(__dirname + '/client'));

// serve pure static assets (may switch to this???)
// const config = require('../config')
// if (!process.env.NODE_ENV) {
//   process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// }
// const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))

app.use("/api/v1/todos", todos);
app.use("/", (req, res) => {
  res.send(`
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Todo App</title>      
    </head>
    <body>
      <div id="root">
        <h1>Todo App</h1>
        <p>Go to <a href="/api/v1/todos">/api/v1/todos</a> to see the todos</p>
      </div>      
    </body>
  </html>
  `);
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

export default app;
