import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";

/** Point d'entrée des routes */
/** Liste toutes les bases routes du projet en important leur fichier de routes*/

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);

export default routes;