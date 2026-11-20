import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 text-white shadow-[0_10px_25px_rgba(14,165,233,.2)] hover:bg-sky-400",
        outline: "border border-white/25 bg-white/5 text-white hover:border-sky-300/70 hover:bg-white/10",
        light: "bg-white text-navy-950 hover:bg-sky-50",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-13 rounded-xl px-6 text-sm",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
