import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"a"> {
  children: string;
}

export function NavLink(props: LinkProps) {
  return (
    <a {...props} className="text-sm font-medium" href={props.href}>
      {props.children}
    </a>
  );
}
