import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { ComponentProps } from 'react';
import PhoneInput from 'react-phone-number-input/input';
import 'react-phone-number-input/style.css';
type InputCustomType = 'custom-phone' | 'custom-calender';
type InputTypeAttribute = ComponentProps<'input'>['type'] | InputCustomType;
type FieldProps = {
  placeholder?: string;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  type?: InputTypeAttribute;
};
type CustomFormFieldProps<TFieldValues extends FieldValues> = {
  label?: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  desc?: string;
} & FieldProps;

export const CustomFormField = <TFieldValues extends FieldValues>({
  label,
  name,
  control,
  desc,
  ...rest
}: CustomFormFieldProps<TFieldValues>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="text-neutral text-[12px]">{label}</FormLabel>
          )}
          <RenderField inputProps={rest} field={field} />
          {desc && (
            <FormDescription>This is your public display name.</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

type RenderFieldProps<TFieldValues extends FieldValues> = {
  field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
  inputProps: FieldProps;
};
function RenderField<TFieldValues extends FieldValues>({
  field,
  inputProps,
}: RenderFieldProps<TFieldValues>) {
  switch (inputProps.type) {
    case 'custom-calender':
      return <></>;
    case 'custom-phone':
      return (
        <FormControl>
          <PhoneInput
            country="US"
            inputComponent={Input}
            placeholder={inputProps.placeholder}
            international
            withCountryCallingCode
            {...field}
          />
        </FormControl>
      );
    default:
      return (
        <FormControl>
          <Input {...inputProps} {...field} />
        </FormControl>
      );
  }
}
