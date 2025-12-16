import { PropsWithChildren } from 'react';

import { TypedFormContext } from '../context';
import { createTypedFormHelpers } from '../utils';

export const HookFormProvider = ({ children }: PropsWithChildren) => {
  return (
    <TypedFormContext.Provider value={createTypedFormHelpers()}>
      {children}
    </TypedFormContext.Provider>
  );
};
