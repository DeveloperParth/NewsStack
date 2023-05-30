import { cn } from "@/lib/utils";
import React from "react";

interface MenuItemProps {
  label: string;
  icon: React.ComponentType;
  isActive?: boolean;
  onClick?: () => void;
}

function MenuItem({ icon: Icon, label, isActive, onClick }: MenuItemProps) {
  return (
    <button
      className={cn(
        "inline-flex relative items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        "flex gap-2 justify-start h-10 py-2 px-4",
        "overflow-hidden",
        "hover:bg-slate-100 hover:text-slate-900",
        isActive &&
          "before:content-[''] before:h-full before:w-2 before:bg-accent before:absolute before:top-0 before:left-0 bg-slate-100 text-slate-900"
      )}
      onClick={onClick}
    >
      <span className="mr-2 -ml-1" aria-hidden="true">
        <Icon />
      </span>
      {label}
    </button>
  );
}

export default MenuItem;
