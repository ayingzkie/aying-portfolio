import classNames from "classnames";
import styles from "./Hero.module.scss";
import Markdown from "react-markdown";

interface HeroSectionType {
  content: string;
}

const components = {
  h1: (props: any) => {
    const { node, ...restProps } = props;
    return <h1 className="font-semibold text-5xl" {...restProps} />;
  },
  em: (props: any) => {
    const { node, ...rest } = props;

    return <span className="text-neutral-500" {...rest} />;
  },

  p: (props: any) => {
    const { node, ...rest } = props;
    return <p className="font-extralight text-xl" {...rest} />;
  },
};

export default function HeroSection(data: HeroSectionType) {
  return (
    <section className={classNames("p-4 rounded-sm lg:rounded-lg")}>
      <Markdown components={{ ...components }}>{data.content}</Markdown>
    </section>
  );
}
