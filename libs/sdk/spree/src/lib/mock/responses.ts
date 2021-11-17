import { categoriesPagesResponses } from "./pages/categories";
import { categoryProducts } from "./pages/category-products";
import { homePageResponse } from "./pages/home";
import { productsResponses } from "./pages/products";
import { relatedProductsResponses } from "./pages/related-products";
import { topCategoriesResponses } from "./pages/top-categories";

export const responses = {
  // Global
  topCategories: topCategoriesResponses,
  // Home page
  homePage: homePageResponse,
  // Categories Pages
  categories: categoriesPagesResponses,
  categoryProducts: categoryProducts,
  // Product Page
  products: productsResponses,
  relatedProducts: relatedProductsResponses,
};