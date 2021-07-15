import * as Joi from 'joi';

import { RegExp } from '../constants';

export const createUserValidator = Joi.object({
  firstName: Joi.string().min(1).max(50).required(),
  lastName: Joi.string().min(1).max(50).required(),
  email: Joi.string().trim().regex(RegExp.email).required(),
  password: Joi.string().trim().required(),
  role: Joi.string()
});
