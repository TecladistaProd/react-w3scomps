import { createContext } from 'react';

export default createContext({
  open: (param: openParam) => {},
});

export interface openParam {
  time?: number;
  message: string;
}
