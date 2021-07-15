import { Request } from 'express';

export interface IRequestExtended extends Request {
  user: any;
}
