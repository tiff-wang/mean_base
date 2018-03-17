var FacebookController = require('../api/controller/templateController')

module.exports = function(app) {
    app.get('/route', function(req, res){
        res.send("it works")
    })
}


