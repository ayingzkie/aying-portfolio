import fetchAPI from "@/util/fetch-api";
import sectionRenderer from "@/util/section-renderer";

export default async function Home() {
  const page = await fetchAPI("/pages", {
    slug: "home",
    populate: "*",
  });

  const sections = page.data[0]?.attributes?.sections || [];
  return sections.map((section: any) => sectionRenderer(section, section.id));
}
