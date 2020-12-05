const checkToken = function(req, res, next) {
    let token = req.headers['authorization']

    if(token) {
        next();
    }
    else {
        res.json({
            success: false,
            message: 'no token in headers'
        })
    }
}

module.exports = {
    checkToken:checkToken
}
