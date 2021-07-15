const morganFreeman = require("morgan");
const express = require("express");
const cors = require("cors");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const rutasTipos = require("./rutas/tipos");

app.use(morganFreeman("dev"));
app.use(cors());
app.use(express.json());

// rutas
app.use("/tipos", rutasTipos);

app.use(error404);
app.use(errorGeneral);
