import { ReactNode } from "react";

export interface HeaderType {
  id: number;
  icon: ReactNode | null;
  title: string | null;
  path: string;
}

export interface HeaderActionsType {
  id: number;
  icon: ReactNode;
  bage: number;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface CategoryType {
  createdAt: string;
  icon: string;
  id: number;
  image: string;
  name: string;
  parentCategoryId: null | number;
  subCategories: CategoryType[];
  updatedAt: string;
}
