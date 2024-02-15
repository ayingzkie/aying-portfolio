import cn from "classnames";
import { HTMLAttributes } from "react";
import { ExtraProps } from "react-markdown";

export function customH1(
  props: HTMLAttributes<HTMLHeadingElement> & ExtraProps
) {
  const { node, className, children, ...restProps } = props;

  return (
    <h1 className={cn("font-semibold text-5xl", className)} {...restProps}>
      {children}
    </h1>
  );
}
