import { Router } from "express";
import UserController from "../controllers/UserController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

/** Utilisateurs de l'API */
/** Les site internet aura le role CLIENT tandis que l'application de gestion le role USER */

/** Ici on importe le controlleur, ainsi que les middlewares qui vont agir sur la branche */
/** On définit temporairement ici en dur le tableau des roles */

const roles = [
    'ADMIN',
    'WRITER',
    'USER',
    'CLIENT'
]

const router = Router();

/** Récupérer tous les utilisateurs */
router.get("/", [checkJwt, checkRole(roles)], UserController.listAll);

/** Récupérer un utilisateur */
router.get("/:id([0-9]+)", [checkJwt, checkRole(roles)], UserController.getOneById)

/** Créer un nouvel utilsateur */
router.post("/", [checkJwt, checkRole(roles)], UserController.newUser);

/** Modifier un utilisateur */
router.patch("/:id([0-9]+)", [checkJwt, checkRole(roles)], UserController.editUser);

/** Supprimer un utilisateur */
router.delete("/:id([0-9]+)", [checkJwt, checkRole(roles)], UserController.deleteUser);

export default router;