const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'eso no es un email mi ciela';
    }
    if(!userData.email){
        errors.email = 'estás olvidando algo muy importantito, el email';
    }
    if(userData.email.length > 35){
        errors.email = 'ese email está larguísimo'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'la contraseña debe tener un tamaño entre 6 y 10 caracteres'
    }

    return errors;
}

export default validation;