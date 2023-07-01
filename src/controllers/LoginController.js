const bcrypt = require('bcrypt');

function login(req, res) {
    if(req.session.loggedin != true) {
        res.render('login/index');
    } else {
        res.redirect('/');
    }
}

function auth(req, res) {
    const data = req.body;
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario WHERE email = ?', [data.email], (err, userdata) => {

            if(userdata.length > 0) {

                userdata.forEach(element => {
                    bcrypt.compare(data.contraseña, element.contraseña, (err, isMatch) => {

                        if(!isMatch) {
                            res.render('login/index', { error: 'Contraseña incorrecta, intentalo denuevo.' });
                        } else {
                            
                            req.session.loggedin = true;
                            req.session.name = element.nombre;

                            res.redirect('/');

                        }   

                    });
                });

            } else {
                res.render('login/index', { error: 'El usuario no existe' });
            }
            
        });
    });
}

function register(req, res){
    if(req.session.loggedin != true) {
        res.render('login/register');
    } else {
        res.redirect('/');
    }
}

function storeUser(req, res){
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario WHERE email = ?', [data.email], (err, userdata) => {
            if(userdata.length > 0) {
                res.render('login/register', { error: 'El usuario ya existe' });
            } else {
                bcrypt.hash(data.contraseña, 12).then(hash => {
        
                    data.contraseña = hash;
                    
                    req.getConnection((err, conn) => {
                        conn.query('INSERT INTO usuario SET ?', [data], (err, rows) => {
                            res.redirect('/');
                        }); 
                    });
            
                });
            }
        });
    });
}

function logout(req, res) {
    if(req.session.loggedin == true) {
        req.session.destroy();
        res.redirect('/login');
    }
}


module.exports = {
    login: login,
    register: register,
    storeUser: storeUser,
    auth: auth,
    logout: logout,
}