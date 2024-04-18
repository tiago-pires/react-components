import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";
import { cva } from "class-variance-authority";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva("inline-flex items-center justify-around", {
  variants: {
    variant: {
      default: "bg-gray-300",
      outline: "bg-transparent border border-gray-400",
      danger: "bg-red-500",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-8 py-1 px-3",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps {
  children: React.ReactNode;
  variant?: "outline" | "danger";
  size?: "sm";
  className?: string;
}

const Button = ({ children, className, variant, size }: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export { Button };
