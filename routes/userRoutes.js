const express= require ("express");
const path= require ("path");

const router= express.Router();

router.get("/home", function(req, res){ 
    res.sendFile(path.join(__dirname,'../views/main/home'));
    //res.send("homeeeeee");
});
router.get("/user/about", function(req, res){ 
        res.sendFile (path.join(__dirname, "./views/main/about"));
         });

router.get("/not-found", function(req, res){ 
    res.sendFile (path.join(__dirname, "./main/not-found"));
     });

router.get("/shopping", function(req, res){ 
        res.sendFile (path.join(__dirname, "./main/shopping"));
         });




module.exports= router;