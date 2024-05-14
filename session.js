const USUARIOS_KEY = "usuarios";
const USUARIO_ACTIVO_KEY = "usuario-activo";

const obtenerUsuarios = () => {
    const usuarios = localStorage.getItem(USUARIOS_KEY);

    if(!usuarios) {
        return [];
    }

    return JSON.parse(usuarios);

};
// {
//     id,
//     correo,
//     contrasena,
//     favoritos;
// }

export const registar = (correo, contrasena, confirmarContrasena) => {
    if(contrasena !== confirmarContrasena) {
        throw new Error ("Las contrasenas no coinciden");
    }

    const usuarios = obtenerUsuarios();



    for(const usuario of usuarios){
        if(usuario.correo === correo){
            throw new Error ("El correo ya se encuentra regustrado");
        }
    }

    usuarios.push({
        id: new Date().getTime(),
        correo: correo,
        contrasena: contrasena,
        favoritos:[],
    });

    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
};

export const login = (correo, constrasena) => {
    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios) {
        if(usuario.correo === correo && usuario.contrasena === constrasena) {
            localStorage.setItem(USUARIO_ACTIVO_KEY, usuario.id)
            return usuario;
        }
    }

    throw new Error ("Usuario y/o contrasena incorrectos");
};

export const obtenerUsuarioEnSesion = () => {
    const usuarioActivo = localStorage.getItem(USUARIO_ACTIVO_KEY);

    if(!usuarioActivo) {
        return null;
    }

    const usuarios = obtenerUsuarios();
    for(const usuario of usuarios){
        if (usuario.id === usuarioActivo) {
            return usuario;
        }
    }

    return null;
};