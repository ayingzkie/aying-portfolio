import classNames from "classnames";
import Markdown from "react-markdown";

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

  return (
    <div
      className={classNames(
        isDark ? "bg-black text-white" : "",
        "p-4 rounded-lg"
      )}
    >
      <div>
        <Markdown>{overlayText}</Markdown>
      </div>
    </div>
  );
}
