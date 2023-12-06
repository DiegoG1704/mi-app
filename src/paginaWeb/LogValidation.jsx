export default function Validation(values) {
    let errors = {};

    const usuario_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contraseña_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!values.usuario) {
        errors.usuario = "El campo Usuario no puede estar vacío";
    } else if (!usuario_pattern.test(values.usuario)) {
        errors.usuario = "";
    }

    if (!values.contraseña) {
        errors.contraseña = "El campo Contraseña no puede estar vacío";
    } else if (!contraseña_pattern.test(values.contraseña)) {
        errors.contraseña = "";
    }

    return errors;
}