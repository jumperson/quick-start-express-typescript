import { Request, Response } from "express";

/* GET users listing. */
export const index = (req: Request, res: Response) => {
  res.send('respond with a resource');
};
