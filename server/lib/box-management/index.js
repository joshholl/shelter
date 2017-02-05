function createBox(request, response) {
    response.send('hi');
}

exports.register = function(app) {
    app.get('/boxes', createBox);
};