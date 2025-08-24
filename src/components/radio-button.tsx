import React from "react";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const RadioButton = ({
  id,
  value,
  label,
}: {
  id: string;
  value: string;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <RadioGroupItem value={value} className="peer sr-only" id={id} />
      <Label
        htmlFor={id}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow px-4 py-1.5 peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:hover:bg-primary/90 peer-data-[state=unchecked]:border peer-data-[state=unchecked]:border-input peer-data-[state=unchecked]:bg-background peer-data-[state=unchecked]:shadow-sm peer-data-[state=unchecked]:hover:bg-accent peer-data-[state=unchecked]:hover:text-accent-foreground cursor-pointer"
      >
        {label}
      </Label>
    </div>
  );
};

export default RadioButton;