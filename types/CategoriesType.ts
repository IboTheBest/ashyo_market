export interface CategoryType {
    id: number,
    name: string,
    image: string,
    icon: string,
    parentCategoryId: null,
    createdAt: string,
    updatedAt: string,
    subCategories: CategoryType[]
}