import cn from "classnames";
import { HTMLAttributes } from "react";

export default function SectionContainer(props: HTMLAttributes<HTMLElement>) {
  const { className, children, ...rest } = props;
  return (
    <section className={cn(className, "p-4")} {...rest}>
      {children}
    </section>
  );
}
