'use strict'

const User = use('App/Models/User');  // importar el modelo usuario para usarlo

class UserController {
    //aqui se crean los metodos que se vayan a utilizar para los usuarios

    store({request}){  //se usa este nombre por convension, request es para recibir la info
        const { username, email, password } = request.all();
        console.log(email, password);
        const user = User.create({
            email,
            password,
            username: email  //se igualan
        });
        return user; //devuelve
    };
}

module.exports = UserController
