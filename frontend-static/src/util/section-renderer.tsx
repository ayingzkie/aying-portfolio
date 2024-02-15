import Cards from "@/modules/home/Cards";
import HeroSection from "@/modules/home/Hero";

export default function sectionRenderer(section: any, index: number) {
  const { __component, id, ...restProps } = section;

  switch (__component) {
    case "home.hero": {
      return <HeroSection key={id} {...restProps} />;
    }
    case "home.skills": {
      return <Cards key={id} {...restProps} />;
    }
    default: {
      return null;
    }
  }
}
