"use client";

import Markdown from "react-markdown";
import { animated, useTrail, useTransition } from "@react-spring/web";
import Slider, { Settings } from "react-slick";

import CardItem, { CardItemProps } from "./CardItem";
import SectionContainer from "@/app/components/SectionContainer";
import { customH1 } from "../shared/markdownElements";
import style from "./Cards.module.scss";
import { Fragment } from "react";

interface CardsProps {
  text: string;
  items: CardItemProps[];
}

var settings: Settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  swipeToSlide: true,
  touchMove: true,
};

export default function Cards(props: CardsProps) {
  const { text, items } = props;

  function renderItems() {
    return items.map((props, i: number) => {
      return <CardItem {...props} />;
    });
  }

  return (
    <SectionContainer className="overflow-x-hidden">
      <div>
        <Markdown
          components={{
            h2: customH1,
          }}
        >
          {text}
        </Markdown>
      </div>
      <Slider {...settings}>{renderItems()}</Slider>
    </SectionContainer>
  );
}
