import Joi from "joi";
export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(2).required(),
});
export default login;
