import classNames from "classnames";
import styles from "./Hero.module.scss";
import Markdown from "react-markdown";
import SectionContainer from "@/app/components/SectionContainer";
import { customH1 } from "../shared/markdownElements";

interface HeroSectionType {
  content: string;
}

const components = {
  h1: customH1,
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
    <SectionContainer
      className={classNames("container rounded-sm lg:rounded-lg min-h-screen")}
    >
      <Markdown components={{ ...components }}>{data.content}</Markdown>
    </SectionContainer>
  );
}
