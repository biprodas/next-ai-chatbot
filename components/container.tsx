import { cn } from "~/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className = "", children }) => {
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

export default Container;
