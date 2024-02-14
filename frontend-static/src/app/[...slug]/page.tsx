import fetchAPI from "@/util/fetch-api";
import sectionRenderer from "@/util/section-renderer";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await fetchAPI("/pages", {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
    populate: "deep",
  });

  return {
    title: page.data[0]?.attributes?.title,
    description: page.data[0]?.attributes?.description,
  };
}

export default async function PageRoute({ params }: Props) {
  const page = await fetchAPI("/pages", {
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
    populate: "*",
  });

  const sections = page.data[0]?.attributes?.sections || [];
  return sections.map((section: any) => sectionRenderer(section, section.id));
}
