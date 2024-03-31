import { Input } from "./Input";
import React from "react";
import { cn } from "../../lib/utils/cn";
interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon: React.ReactNode;
  inputClassName?: string;
}

const InputWithIcon = React.forwardRef<HTMLDivElement, InputWithIconProps>(
  ({ Icon, className, inputClassName, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center px-3 py-1 gap-x-2 rounded-md border border-gray-400 focus-within:border focus-within:border-black",
          className
        )}
        ref={ref}
      >
        {Icon}
        <Input
          type={type}
          className={cn(
            "focus-visible:ring-0 border-none text-md px-0 py-0",
            inputClassName
          )}
          {...props}
        />
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { InputWithIcon };
