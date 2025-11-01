import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  `flex h-9 w-full rounded-md 
          bg-transparent px-3 py-1 text-base
          transition-colors 
          file:border-0 file:bg-transparent 
          file:text-sm file:font-medium 
          file:text-foreground 
          placeholder:text-muted-foreground 
          focus-visible:outline-none 
          disabled:cursor-not-allowed 
          disabled:opacity-50 
          md:text-sm`,
  {
    variants: {
      variant: {
        default:
          "shadow-sm border border-input focus-visible:ring-1 focus-visible:ring-ring ",
        ghost: "shadow-none border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
