import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsCallButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_call_buttons';
  info: {
    description: '';
    displayName: 'callButton';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.call-button': ButtonsCallButton;
    }
  }
}
