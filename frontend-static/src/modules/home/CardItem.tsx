"use client";

import classNames from "classnames";
import Markdown from "react-markdown";

import styles from "./CardItem.module.scss";
import { useRef } from "react";
import useIsInView from "@/app/hooks/useIsInView";

export interface CardItemProps {
  id: number;
  index: number;
  overlayText: string;
  bgImage: string;
  isDark: boolean;
  onClick?: Function;
}

export default function CardItem(props: CardItemProps) {
  const { overlayText, isDark } = props;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIsInView<HTMLDivElement>(ref);

  return (
    <div
      className={classNames(
        isDark ? "bg-black text-white" : "bg-white",
        "p-4 rounded-lg shadow-around ms-2 me-2",
        styles.cardItem
      )}
      ref={ref}
    >
      <div>
        <Markdown>{overlayText}</Markdown>
      </div>
    </div>
  );
}
