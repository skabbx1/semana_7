exports.login = (req, res) => {
    const { user, password } = req.body;
    if (user === 'admin' && password === '1234') {
        res.cookie('session', 'token_valido', { httpOnly: true, sameSite: 'strict' });
        res.send('Login correcto');
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
};