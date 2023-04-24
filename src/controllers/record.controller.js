import { db } from "../database/database.connection.js";

export const postRecord = async (req, res) => {
  const {
    queixa,
    gengivaSangra,
    dentesSensiveis,
    reacaoAlergica,
    medicamentosAlergicos,
    mordeLapis,
    roiUnha,
    habitosDeleterios,
    gravidez,
    mesGestacao,
    amamentando,
    emTratamentoMedico,
    tratamentoMedico,
    tomandoMedicamento,
    medicamento,
    infectocontagiosas,
    doenca,
    fumante,
    alcoolatra,
    taisDoencas,
  } = req.body;
  try {
    res.status(201).send({ message: "registrado" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
export const getRecord = async (req, res) => {
  try {
    res.status(200).send({ message: "prontuarios adquiridos" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
