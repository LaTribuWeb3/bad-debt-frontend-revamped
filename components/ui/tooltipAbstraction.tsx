import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import { ReactNode } from "react";
  
  type CustomTooltipProps = {
    children: ReactNode; // The trigger element
    content: ReactNode; // The tooltip content
  };
  
  export const CustomTooltip = ({ children, content }: CustomTooltipProps) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent>{content}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };