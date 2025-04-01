import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_posts';
  info: {
    displayName: 'blogPost';
  };
  attributes: {
    after: Schema.Attribute.Media<'images'>;
    before: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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

export interface ButtonsPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_buttons_phone_numbers';
  info: {
    displayName: 'phoneNumber';
  };
  attributes: {
    phoneNumberText: Schema.Attribute.Text;
    phoneNumberUrl: Schema.Attribute.String;
  };
}

export interface ButtonsRouteButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_route_buttons';
  info: {
    displayName: 'routeButton';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.Text;
  };
}

export interface RulesRules extends Struct.ComponentSchema {
  collectionName: 'components_rules_rules';
  info: {
    displayName: 'rules';
  };
  attributes: {
    rulesText: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog-post': BlogBlogPost;
      'buttons.call-button': ButtonsCallButton;
      'buttons.phone-number': ButtonsPhoneNumber;
      'buttons.route-button': ButtonsRouteButton;
      'rules.rules': RulesRules;
    }
  }
}
