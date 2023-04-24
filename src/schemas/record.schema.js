import Joi from "joi";
const recordSchema = Joi.object({
  queixa: Joi.string().length(250).required(),
  gengivaSangra: Joi.boolean().required(),
  dentesSensiveis: Joi.boolean().required(),
  reacaoAlergica: Joi.boolean().required(),
  medicamentosAlergicos: Joi.string().length(250),
  mordeLapis: Joi.boolean().required(),
  roiUnha: Joi.boolean().required(),
  habitosDeleterios: Joi.string().length(250),
  gravidez: Joi.boolean().required(),
  mesGestacao: Joi.number().integer().min(1).max(9),
  amamentando: Joi.boolean().required(),
  emTratamentoMedico: Joi.boolean().required(),
  tratamentoMedico: Joi.string().length(250),
  tomandoMedicamento: Joi.boolean().required(),
  medicamento: Joi.string().length(250),
  infectocontagiosas: Joi.boolean().required(),
  doenca: Joi.string().length(250),
  fumante: Joi.boolean().required(),
  alcoolatra: Joi.boolean().required(),
  taisDoencas: Joi.string().valid("diabetes", "tuberculose", "problemas cardiacos", "artrite", "asma"),
});
export default recordSchema;
