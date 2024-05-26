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
          "flex items-center gap-x-2 rounded-xl border border-gray-400 px-3 py-1 focus-within:border focus-within:border-[#a8a8a8]",
          className
        )}
        ref={ref}
      >
        {Icon}
        <Input
          type={type}
          className={cn(
            "border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0",
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
