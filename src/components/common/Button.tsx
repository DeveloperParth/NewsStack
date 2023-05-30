import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-accent text-black hover:bg-accent/60",
        destructive: "text-red-600 bg-danger hover:bg-danger/60",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-slate-100",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        sm: "h-9 px-3 rounded-md",
        default: "h-10 py-2 px-4",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode;
}
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        }),
        props.leftIcon && "flex gap-2 justify-start px-6"
      )}
      {...props}
    >
      {props.leftIcon && (
        <span className="mr-2 -ml-1" aria-hidden="true">
          {props.leftIcon}
        </span>
      )}
      {props.children}
    </button>
  );
}
