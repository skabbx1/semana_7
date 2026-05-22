module.exports = (req, res, next) => {
    if (req.cookies.session) {
        next();
    } else {
        res.status(403).send('No tienes permiso para ver esto.');
    }
};