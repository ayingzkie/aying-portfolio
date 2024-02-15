"use client";

import Markdown from "react-markdown";
import CardItem, { CardItemProps } from "./CardItem";
import SectionContainer from "@/app/components/SectionContainer";
import { customH1 } from "../shared/markdownElements";
import {
  useSprings,
  animated,
  useTransition,
  useSpringRef,
  useChain,
} from "@react-spring/web";

interface CardsProps {
  text: string;
  items: CardItemProps[];
}

export default function Cards(props: CardsProps) {
  const { text, items } = props;

  const springRef = useSpringRef();
  const transitions = useTransition(items, {
    trail: 400 / items.length,
    from: {
      opacity: 0,
      y: 100,
    },
    enter: {
      opacity: 1,
      y: 0,
    },
    leave: {
      opacity: 0,
      y: 50,
    },
  });

  function renderItems() {
    return transitions((style, item) => {
      return (
        <animated.div style={style}>
          <CardItem {...item} />
        </animated.div>
      );
    });
  }

  return (
    <SectionContainer>
      <div>
        <Markdown
          components={{
            h2: customH1,
          }}
        >
          {text}
        </Markdown>
      </div>
      <div className="flex gap-8">{renderItems()}</div>
    </SectionContainer>
  );
}
