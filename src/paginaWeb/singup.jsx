export default function RegistroValidation(values) {
    let errors = {};
  
    if (!values.usuario) {
      errors.usuario = "El campo Usuario no puede estar vacío";
    }
  
    if (!values.contraseña) {
      errors.contraseña = "El campo Contraseña no puede estar vacío";
    }
  
    if (!values.confirmarContraseña) {
      errors.confirmarContraseña = "El campo Confirmar Contraseña no puede estar vacío";
    } else if (values.confirmarContraseña !== values.contraseña) {
      errors.confirmarContraseña = "Las contraseñas no coinciden";
    }
  
    return errors;
  }