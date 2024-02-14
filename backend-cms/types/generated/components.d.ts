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

export interface HomeSkillCard extends Schema.Component {
  collectionName: 'components_home_skill_cards';
  info: {
    displayName: 'Card Item';
    description: '';
  };
  attributes: {
    isDark: Attribute.Boolean;
    bgImage: Attribute.Media;
    overlayText: Attribute.RichText;
  };
}

export interface HomeSkills extends Schema.Component {
  collectionName: 'components_home_skills';
  info: {
    displayName: 'Cards';
    description: '';
  };
  attributes: {
    text: Attribute.RichText;
    items: Attribute.Component<'home.skill-card', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero': HomeHero;
      'home.skill-card': HomeSkillCard;
      'home.skills': HomeSkills;
    }
  }
}
