const express = require("express");
const {
  listarTipos,
  mostrarTipo,
  crearTipo,
  modificarTipo,
  borrarTipo,
} = require("../../bd/controladores/tiposController");

const router = express.Router();

router.get("/listado", async (req, res, next) => {
  try {
    const listaTipos = await listarTipos();
    res.json(listaTipos);
  } catch (err) {
    next(err);
  }
});

router.get("/tipo/:idTipo", async (req, res, next) => {
  try {
    const { idTipo } = req.params;
    const tipoObtenido = await mostrarTipo(idTipo);
    res.json(tipoObtenido);
  } catch (err) {
    next(err);
  }
});

router.post("/nuevo-tipo", async (req, res, next) => {
  try {
    const nuevoTipo = req.body;
    const tipoCreado = await crearTipo(nuevoTipo);
    res.json(tipoCreado);
  } catch (err) {
    next(err);
  }
});

router.put("/tipo/:idTipo", async (req, res, next) => {
  try {
    const { idTipo } = req.params;
    const modificaciones = req.body;
    const tipoModificado = await modificarTipo(idTipo, modificaciones);
    res.json(tipoModificado);
  } catch (err) {
    next(err);
  }
});

router.delete("/tipo/:idTipo", async (req, res, next) => {
  try {
    const { idTipo } = req.params;
    const tipoEliminado = await borrarTipo(idTipo);
    res.json(tipoEliminado);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
