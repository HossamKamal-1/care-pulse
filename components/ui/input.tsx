import * as React from 'react';

import { cn } from '@/lib/utils';
import Image from 'next/image';
type InputProps = {
  iconSrc?: string;
  iconAlt?: string;
};
const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & InputProps
>(({ className, type, iconSrc, iconAlt, ...props }, ref) => {
  return (
    <div className="relative w-full bg-[#363A3D] focus-within:bg-gradient-to-r transition-colors focus-within:from-[#82DBF7] focus-within:to-[#B6F09C] p-[1px]  rounded-md focus-within:ring-2 focus-within:ring-[#84DCF53D] shadow-sm">
      {iconSrc && (
        <div className="absolute top-0 start-0 h-full flex items-center justify-center w-[40px] ps-2 pointer-events-none">
          <Image src={iconSrc} width={15} height={15} alt={iconAlt ?? ''} />
        </div>
      )}
      <input
        type={type}
        className={cn(
          'h-9 w-full rounded-md bg-[#1A1D21] px-3 py-1 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          { 'ps-[40px]': Boolean(iconSrc) },
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
