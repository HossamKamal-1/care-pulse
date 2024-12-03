'use client';
import { Button, ButtonProps } from '../ui/button';

type SubmitButtonProps = Omit<ButtonProps, 'type'> & {
  pendingText?: string;
  isLoading: boolean;
};
export const SubmitButton = ({
  pendingText = 'Loading',
  children,
  disabled = false,
  isLoading,
  ...props
}: SubmitButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading || disabled} {...props}>
      {isLoading ? pendingText : children}
    </Button>
  );
};
