// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice =
  | PhysicsPlaygroundSlice
  | TeamMembersSlice
  | AboutTheSkateboardsSlice
  | ProductGridSlice
  | HeroSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

/**
 * Item in *Settings → Top Navigation*
 */
export interface SettingsDocumentDataTopNavigationItem {
  /**
   * Link field in *Settings → Top Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site Title field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  site_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Fallback OG Image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.fallback_og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fallback_og_image: prismic.ImageField<never>;

  /**
   * Top Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  top_navigation: prismic.GroupField<
    Simplify<SettingsDocumentDataTopNavigationItem>
  >;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

/**
 * Content for Skateboard documents
 */
interface SkateboardDocumentData {
  /**
   * Name field in *Skateboard*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Image field in *Skateboard*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Price (cents) field in *Skateboard*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.price
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Customizer Link field in *Skateboard*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: skateboard.customizer_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  customizer_link: prismic.LinkField;
}

/**
 * Skateboard document from Prismic
 *
 * - **API ID**: `skateboard`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkateboardDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<SkateboardDocumentData>,
    "skateboard",
    Lang
  >;

/**
 * Content for Skater documents
 */
interface SkaterDocumentData {
  /**
   * First Name field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.first_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_name: prismic.KeyTextField;

  /**
   * Last Name field in *Skater*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.last_name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  last_name: prismic.KeyTextField;

  /**
   * Background Image field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.bg_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bg_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *Skater*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.fg_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  fg_image: prismic.ImageField<never>;

  /**
   * Customizer Link field in *Skater*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.customizer_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  customizer_link: prismic.LinkField;

  /**
   * Theme field in *Skater*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: skater.theme
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<
    "Blue" | "Lime" | "Navy" | "Orange" | "Pink" | "Purple" | "Gray"
  >;
}

/**
 * Skater document from Prismic
 *
 * - **API ID**: `skater`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SkaterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SkaterDocumentData>, "skater", Lang>;

export type AllDocumentTypes =
  | HomepageDocument
  | SettingsDocument
  | SkateboardDocument
  | SkaterDocument;

/**
 * Primary content in *AboutTheSkateboards → Default → Primary*
 */
export interface AboutTheSkateboardsSliceDefaultPrimary {
  /**
   * Theme field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<
    "Blue" | "Lime" | "Navy" | "Orange" | "Pink" | "Purple" | "Gray"
  >;

  /**
   * Heading field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * Background Image field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *AboutTheSkateboards → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.default.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutTheSkateboards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTheSkateboardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutTheSkateboardsSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *AboutTheSkateboards → Image on left → Primary*
 */
export interface AboutTheSkateboardsSliceImageOnLeftPrimary {
  /**
   * Theme field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.theme
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  theme: prismic.SelectField<
    "Blue" | "Lime" | "Navy" | "Orange" | "Pink" | "Purple" | "Gray"
  >;

  /**
   * Heading field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Body field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;

  /**
   * Background Image field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Foreground Image field in *AboutTheSkateboards → Image on left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_the_skateboards.imageOnLeft.primary.foreground_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foreground_image: prismic.ImageField<never>;
}

/**
 * Image on left variation for AboutTheSkateboards Slice
 *
 * - **API ID**: `imageOnLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTheSkateboardsSliceImageOnLeft = prismic.SharedSliceVariation<
  "imageOnLeft",
  Simplify<AboutTheSkateboardsSliceImageOnLeftPrimary>,
  never
>;

/**
 * Slice variation for *AboutTheSkateboards*
 */
type AboutTheSkateboardsSliceVariation =
  | AboutTheSkateboardsSliceDefault
  | AboutTheSkateboardsSliceImageOnLeft;

/**
 * AboutTheSkateboards Shared Slice
 *
 * - **API ID**: `about_the_skateboards`
 * - **Description**: AboutTheSkateboards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutTheSkateboardsSlice = prismic.SharedSlice<
  "about_the_skateboards",
  AboutTheSkateboardsSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Heading field in *Hero → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Button field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.button
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *PhysicsPlayground → Default → Primary → Skateboards*
 */
export interface PhysicsPlaygroundSliceDefaultPrimarySkateboardsItem {
  /**
   * Skateboard Image field in *PhysicsPlayground → Default → Primary → Skateboards*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: physics_playground.default.primary.skateboards[].skateboard_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  skateboard_image: prismic.ImageField<never>;
}

/**
 * Primary content in *PhysicsPlayground → Default → Primary*
 */
export interface PhysicsPlaygroundSliceDefaultPrimary {
  /**
   * Background Image field in *PhysicsPlayground → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: physics_playground.default.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Image Copyright field in *PhysicsPlayground → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: physics_playground.default.primary.image_copyright
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  image_copyright: prismic.RichTextField;

  /**
   * Skateboards field in *PhysicsPlayground → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: physics_playground.default.primary.skateboards[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  skateboards: prismic.GroupField<
    Simplify<PhysicsPlaygroundSliceDefaultPrimarySkateboardsItem>
  >;
}

/**
 * Default variation for PhysicsPlayground Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhysicsPlaygroundSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PhysicsPlaygroundSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *PhysicsPlayground*
 */
type PhysicsPlaygroundSliceVariation = PhysicsPlaygroundSliceDefault;

/**
 * PhysicsPlayground Shared Slice
 *
 * - **API ID**: `physics_playground`
 * - **Description**: PhysicsPlayground
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PhysicsPlaygroundSlice = prismic.SharedSlice<
  "physics_playground",
  PhysicsPlaygroundSliceVariation
>;

/**
 * Item in *ProductGrid → Default → Primary → Product*
 */
export interface ProductGridSliceDefaultPrimaryProductItem {
  /**
   * Skateboard field in *ProductGrid → Default → Primary → Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.product[].skateboard
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  skateboard: prismic.ContentRelationshipField<"skateboard">;
}

/**
 * Primary content in *ProductGrid → Default → Primary*
 */
export interface ProductGridSliceDefaultPrimary {
  /**
   * Heading field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Body field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;

  /**
   * Product field in *ProductGrid → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: product_grid.default.primary.product[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  product: prismic.GroupField<
    Simplify<ProductGridSliceDefaultPrimaryProductItem>
  >;
}

/**
 * Default variation for ProductGrid Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductGridSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProductGridSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProductGrid*
 */
type ProductGridSliceVariation = ProductGridSliceDefault;

/**
 * ProductGrid Shared Slice
 *
 * - **API ID**: `product_grid`
 * - **Description**: ProductGrid
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductGridSlice = prismic.SharedSlice<
  "product_grid",
  ProductGridSliceVariation
>;

/**
 * Item in *TeamMembers → Default → Primary → Members*
 */
export interface TeamMembersSliceDefaultPrimaryMembersItem {
  /**
   * Team Members field in *TeamMembers → Default → Primary → Members*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.default.primary.members[].team_members
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  team_members: prismic.ContentRelationshipField<"skater">;
}

/**
 * Primary content in *TeamMembers → Default → Primary*
 */
export interface TeamMembersSliceDefaultPrimary {
  /**
   * Heading field in *TeamMembers → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Members field in *TeamMembers → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: team_members.default.primary.members[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  members: prismic.GroupField<
    Simplify<TeamMembersSliceDefaultPrimaryMembersItem>
  >;
}

/**
 * Default variation for TeamMembers Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TeamMembersSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *TeamMembers*
 */
type TeamMembersSliceVariation = TeamMembersSliceDefault;

/**
 * TeamMembers Shared Slice
 *
 * - **API ID**: `team_members`
 * - **Description**: TeamMembers
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TeamMembersSlice = prismic.SharedSlice<
  "team_members",
  TeamMembersSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataTopNavigationItem,
      SkateboardDocument,
      SkateboardDocumentData,
      SkaterDocument,
      SkaterDocumentData,
      AllDocumentTypes,
      AboutTheSkateboardsSlice,
      AboutTheSkateboardsSliceDefaultPrimary,
      AboutTheSkateboardsSliceImageOnLeftPrimary,
      AboutTheSkateboardsSliceVariation,
      AboutTheSkateboardsSliceDefault,
      AboutTheSkateboardsSliceImageOnLeft,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      PhysicsPlaygroundSlice,
      PhysicsPlaygroundSliceDefaultPrimarySkateboardsItem,
      PhysicsPlaygroundSliceDefaultPrimary,
      PhysicsPlaygroundSliceVariation,
      PhysicsPlaygroundSliceDefault,
      ProductGridSlice,
      ProductGridSliceDefaultPrimaryProductItem,
      ProductGridSliceDefaultPrimary,
      ProductGridSliceVariation,
      ProductGridSliceDefault,
      TeamMembersSlice,
      TeamMembersSliceDefaultPrimaryMembersItem,
      TeamMembersSliceDefaultPrimary,
      TeamMembersSliceVariation,
      TeamMembersSliceDefault,
    };
  }
}
