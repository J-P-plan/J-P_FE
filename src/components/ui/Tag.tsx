import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils/cn";

const tagVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-light hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-text-lightest hover:bg-secondary/80",
        destructive:
          "border-transparent bg-point-red text-text-lightest hover:bg-point-red/80",
        outline: "border-gray-700 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return <div className={cn(tagVariants({ variant }), className)} {...props} />;
}

export { Tag, tagVariants };
