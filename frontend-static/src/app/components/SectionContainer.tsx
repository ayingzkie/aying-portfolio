import cn from "classnames";
import { HTMLAttributes } from "react";

export default function SectionContainer(props: HTMLAttributes<HTMLElement>) {
  const { className, children, ...rest } = props;
  return (
    <section className={cn("p-4", className)} {...rest}>
      {children}
    </section>
  );
}
