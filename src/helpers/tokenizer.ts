import * as jwt from 'jsonwebtoken';

export const tokenizer = (
  id: string,
  firstName: string,
  role: string
): {
  access_token: string;
  refresh_token: string;
} => {
  const payload = { id, firstName, role };

  const access_token = jwt.sign(payload, 'JWT_SECRET', { expiresIn: '1d' });
  const refresh_token = jwt.sign({}, 'JWT_REFRESH', { expiresIn: '30d' });

  return {
    access_token,
    refresh_token
  };
};
