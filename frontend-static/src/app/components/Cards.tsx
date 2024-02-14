import Markdown from "react-markdown";
import CardItem, { CardItemProps } from "./CardItem";

interface CardsProps {
  text: string;
  items: CardItemProps[];
}

export default function Cards(props: CardsProps) {
  const { text, items } = props;

  console.log(props, "@props");

  function renderItems() {
    return items.map((item) => {
      return <CardItem {...item} />;
    });
  }

  return (
    <section>
      <div>
        <Markdown>{text}</Markdown>
      </div>
      <div>{renderItems()}</div>
    </section>
  );
}
