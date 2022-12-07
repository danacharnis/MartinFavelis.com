const path= require ("path");

const controller = {
    home: function(req, res){ 
        res.sendFile(path.join(__dirname,'../views/main/home.html'));
    },

    about: function(req, res){ 
        res.sendFile (path.join(__dirname, '../views/main/about.html'));
         },

    notFound: function(req, res){ 
        res.sendFile (path.join(__dirname, '../views/main/not-found.html'));
         },
    shopping:function(req, res){ 
        res.sendFile (path.join(__dirname, '../views/main/shopping.html'));
         },
}

module.exports= controller;