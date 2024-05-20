import express from "express";
import morgan from "morgan";
import { engine } from 'express-handlebars';
import passport from "passport";
import sessionMiddleware from './database/session.js';
import { PORT } from "./database/config.js";
import views_router from "./modules/vista.router.js";
import "./modules/authentication/passport.js"
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Session
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(views_router);

// Settings view
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Public
app.use(express.static('./public'));

// No found
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

// Starting
app.listen(PORT)
console.log(`Server on port http://localhost:${PORT}`);
// export default app;
