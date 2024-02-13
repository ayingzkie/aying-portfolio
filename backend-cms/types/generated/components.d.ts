import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    content: Attribute.RichText;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero': HomeHero;
    }
  }
}
