"use client";

import * as React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-point-red text-text-onPrimary hover:bg-point-red/90",
        rounded:
          "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl",
        outline:
          "border border-input bg-background hover:bg-gray-900 hover:text-text-onPrimary",
        secondary: "bg-secondary text-text-onPrimary hover:bg-secondary/80",
        ghost: "hover:bg-gray-900 hover:text-text-onPrimary",
      },
      size: {
        default: "h-auto px-4 py-2",
        sm: "h-auto rounded-md px-3",
        lg: "h-auto rounded-md px-8",
        icon: "h-auto w-auto",
      },
      withIcon: {
        default: "flex items-center justify-center gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IconProps {
  icon?: React.ReactNode;
  iconPlacement?: "left" | "right";
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & IconProps>(
  (
    {
      className,
      variant,
      size,
      withIcon,
      icon,
      iconPlacement,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, withIcon, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          <>{props.children}</>
        ) : (
          <>
            {icon && iconPlacement === "left" && (
              <div className="size-full">{icon}</div>
            )}
            {props.children}
            {icon && iconPlacement === "right" && (
              <div className="size-full">{icon}</div>
            )}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
