import { NowApiHandler } from './types';

const listener: NowApiHandler = (req, res) => {
  res.status(200);
  res.send('hello:RANDOMNESS_PLACEHOLDER');
};

export default listener;
