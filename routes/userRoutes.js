const express= require ("express");
const path= require ("path");
const userController= require ("../controllers/userControllers")

const router= express.Router();

router.get("/", userController.home );
router.get("/about",userController.about);
router.get("/not-found",userController.notFound);
router.get("/shopping",userController.shopping);




module.exports= router;