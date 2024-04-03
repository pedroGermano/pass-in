import { ComponentProps } from "react";

interface TableProps extends ComponentProps<"table"> {}

export function Table(props: TableProps) {
  return (
    <div className="border rounded-lg border-white/10">
      <table className="w-full" {...props} />
    </div>
  );
}
