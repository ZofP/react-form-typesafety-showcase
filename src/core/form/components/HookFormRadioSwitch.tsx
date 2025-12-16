import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { HookFormRadioInputProps } from '@/types';
import { parseStringToBoolean } from '@/utils';
import { HookFormRadioGroup } from './HookFormRadioGroup';

type HookFormRadioSwitchProps<TFormValues extends FieldValues> = Omit<
  HookFormRadioInputProps<TFormValues>,
  'items' | 'transformValue'
>;

export const HookFormRadioSwitch = <TFormValues extends FieldValues>(
  props: HookFormRadioSwitchProps<TFormValues>,
) => {
  const { t } = useTranslation();
  const radioItems = [
    { label: t('app.yes'), value: true },
    {
      label: t('app.no'),
      value: false,
    },
  ];

  return (
    <HookFormRadioGroup
      flex
      items={radioItems}
      transformValue={parseStringToBoolean}
      {...props}
    />
  );
};
