var express = require("express");
var router  = express();

router.get("/", function(req, res){
    res.render("index", {
        page_js_loc: "/js/pages/index.js",
        ssheet:
            [   
                "/css/home.css",
                "/css/main.css"
            ]
    });
});

module.exports = router;