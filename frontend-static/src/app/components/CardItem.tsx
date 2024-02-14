import classNames from "classnames";
import Markdown from "react-markdown";

export interface CardItemProps {
  overlayText: string;
  bgImage: string;
  isDark: boolean;
  onClick?: Function;
}

export default function CardItem(props: CardItemProps) {
  const { overlayText, isDark } = props;

  return (
    <div className={classNames(isDark ? "bg-black text-white" : "")}>
      <div>
        <Markdown>{overlayText}</Markdown>
      </div>
    </div>
  );
}
