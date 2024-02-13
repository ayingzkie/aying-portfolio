import fetchAPI from "@/util/fetch-api";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await fetchAPI("/pages", {
    slug: params.slug,
  });

  return {
    title: page.data[0].attributes?.title,
    description: page.data[0].attributes?.description,
  };
}

export default function PageRoute({ params }: Props) {
  return <main></main>;
}
