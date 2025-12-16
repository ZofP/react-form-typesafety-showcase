import { createContext } from 'react';

import { TypedFormContextArgs } from '../types';

export const TypedFormContext = createContext<TypedFormContextArgs | null>(
  null,
);
