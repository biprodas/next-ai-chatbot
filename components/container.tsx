import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}


export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div 
      className={cn(
        "min-w-[320px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", 
        className
      )}
    >
      {children}
    </div>
  )
}

export const ContainerDashboard = ({ className = "", children }: ContainerProps) => {
  return (
    <div
      className={cn(
        "min-w-[320px] max-w-[2520px] mx-auto px-3 2xl:p-20",
        className
      )}
    >
      {children}
    </div>
  );
};

