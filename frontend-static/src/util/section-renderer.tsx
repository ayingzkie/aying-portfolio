import HeroSection from "@/modules/home/Hero";

export default function sectionRenderer(section: any, index: number) {
  const { __component, ...restProps } = section;

  switch (__component) {
    case "home.hero": {
      return <HeroSection key={index} {...restProps} />;
    }
    default: {
      return null;
    }
  }
}
