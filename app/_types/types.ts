export type TitleProps = {
  isInSide?: boolean;
};

export type TitleInNormalProps = {
  where: string;
};

export type LoaderIconProps = {
  size: number;
};

export type SkillCardProps = {
  id: number;
  name: string;
};

export type SkillCardTypeProps = 'available' | 'interested' | 'learning';

export type SkillTitleProps = string;

export type PathNameType = 'TOP' | 'BLOGS' | 'PRODUCTS';

export type ProductCardType = {
  image: string;
  title: string;
  description: string;
  isDemo?: boolean;
  isOtherSite: boolean;
  href: string;
};
