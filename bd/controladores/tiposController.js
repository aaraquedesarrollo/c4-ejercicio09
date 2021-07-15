const { crearError } = require("../../servidor/errores");
const Tipo = require("../modelos/Tipos");

const listarTipos = () => {
  try {
    const listaTipos = Tipo.find();
    return listaTipos;
  } catch (err) {
    throw crearError(`No se han podido listar los tipos: ${err.message}`);
  }
};

const mostrarTipo = (idTipo) => {
  try {
    const tipoEncontrado = Tipo.findById(idTipo);
    return tipoEncontrado;
  } catch (err) {
    throw crearError(`No se ha podido mostrar el tipo: ${err.message}`);
  }
};

const crearTipo = (nuevoTipo) => {
  try {
    const tipoCreado = Tipo.create(nuevoTipo);
    return tipoCreado;
  } catch (err) {
    throw crearError(`No se ha podido crear el tipo: ${err.message}`);
  }
};

const modificarTipo = (tipoModificado) => {
  try {
    const tipoModificadoDevuelto = Tipo.findByIdAndUpdate(
      tipoModificado._id,
      tipoModificado
    );
    return tipoModificadoDevuelto;
  } catch (err) {
    throw crearError(`No se ha podido modificar el tipo: ${err.message}`);
  }
};

const borrarTipo = (idTipo) => {
  try {
    const tipoBorrado = Tipo.findByIdAndRemove(idTipo);
    return tipoBorrado;
  } catch (err) {
    throw crearError(`No se ha podido borrar el tipo: ${err.message}`);
  }
};

module.exports = {
  listarTipos,
  mostrarTipo,
  crearTipo,
  modificarTipo,
  borrarTipo,
};
