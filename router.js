import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/display").get(controller.displayUser);
router.route("/add").post(controller.addUser);
router.route("/delete/:name").delete(controller.deleteUser);
export default router;