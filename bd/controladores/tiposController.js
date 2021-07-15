const { crearError } = require("../../servidor/errores");
const Tipo = require("../modelos/Tipos");

const listarTipos = async () => {
  try {
    const listaTipos = await Tipo.find();
    return listaTipos;
  } catch (err) {
    throw crearError(`No se han podido listar los tipos${err.message}`);
  }
};

const mostrarTipo = async (idTipo) => {
  try {
    const tipoEncontrado = await Tipo.findById(idTipo);
    return tipoEncontrado;
  } catch (err) {
    throw crearError(`No se ha podido mostrar el tipo: ${err.message}`);
  }
};

const crearTipo = async (nuevoTipo) => {
  try {
    const tipoCreado = await Tipo.create(nuevoTipo);
    return tipoCreado;
  } catch (err) {
    throw crearError(`No se ha podido crear el tipo: ${err.message}`);
  }
};

const modificarTipo = async (idTipo, tipoModificado) => {
  try {
    const tipoModificadoDevuelto = await Tipo.findByIdAndUpdate(
      idTipo,
      tipoModificado
    );
    return tipoModificadoDevuelto;
  } catch (err) {
    throw crearError(`No se ha podido modificar el tipo: ${err.message}`);
  }
};

const borrarTipo = async (idTipo) => {
  try {
    const tipoBorrado = await Tipo.findByIdAndRemove(idTipo);
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
