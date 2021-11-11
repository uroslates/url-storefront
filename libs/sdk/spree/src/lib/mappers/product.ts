import { Product, Image, ImageStyle, OptionType, OptionValue } from '@url/shared/types';
import { SpreeImageStyle, SpreeOptionType, SpreeOptionValue, SpreeProduct, SpreeProductImage } from '../types/product';

export class ProductMapper {
  static mapSpreeProductToProduct(product: SpreeProduct): Product {
    const images =  [...ProductMapper.mapSpreeProductImagesToProductsImages(product.images)];
    const displayPrice = product.display_price;
    const inStock = product.in_stock;
    const productProperties = product.product_properties ? [...product.product_properties] : undefined;
    const defaultVariant = product.default_variant ? ProductMapper.mapSpreeProductToProduct({...product.default_variant}) : undefined;
    const optionTypes = product.option_types ? ProductMapper.mapSpreeProductOptionTypesToOptionTypes([...product.option_types]) : undefined;
    const optionValues = product.option_values ? ProductMapper.mapSpreeProductOptionValuesToOptionValues([...product.option_values]) : undefined;
    const variants = product.variants ? ProductMapper.mapSpreeProductsToProducts([...product.variants]) : undefined;

    delete (product as any).displayPrice;
    delete (product as any).in_stock;
    delete (product as any).product_properties;
    delete (product as any).default_variant;
    delete (product as any).option_types;
    delete (product as any).option_values;
    
    return ({
      ...{...product},
      images,
      displayPrice,
      inStock,
      productProperties,
      defaultVariant,
      optionTypes,
      variants,
      optionValues
    }) as Product;
  }
  
  static mapSpreeProductsToProducts(products: SpreeProduct[] = []): Product[] {
    return (products || []).map(ProductMapper.mapSpreeProductToProduct);
  }

  static mapSpreeProductImageToProductImage(image: SpreeProductImage): Image {
    const styles =  [...ProductMapper.mapSpreeProductImageStylesToImageStyles(image.styles)];
    // TODO: shop base prefix goes here(from env config)
    const originalUrl = image.original_url;
    // TODO: shop base prefix goes here(from env config)
    const transformedUrl = image.transformed_url;
    delete (image as any).original_url;
    delete (image as any).transformed_url;
    return ({
      ...{...image},
      styles,
      originalUrl,
      transformedUrl
    }) as Image;
  }

  static mapSpreeProductImagesToProductsImages(images: SpreeProductImage[] = []): Image[] {
    return images.map(ProductMapper.mapSpreeProductImageToProductImage);
  }

  static mapSpreeProductImageStyleToImageStyle(style: SpreeImageStyle): ImageStyle {
    return ({
      ...{...style},
      // TODO: shop base prefix goes here(from env config)
      url: style.url
    }) as ImageStyle;
  }

  static mapSpreeProductImageStylesToImageStyles(styles: SpreeImageStyle[] = []): ImageStyle[] {
    return styles.map(ProductMapper.mapSpreeProductImageStyleToImageStyle);
  }

  static mapSpreeProductOptionTypeToOptionType(optionType: SpreeOptionType): OptionType {
    const optionValues = ProductMapper.mapSpreeProductOptionValuesToOptionValues([...optionType.option_values]);
    delete (optionType as any).option_values;
    return ({
      ...{...optionType},
      optionValues
    }) as OptionType;
  }

  static mapSpreeProductOptionTypesToOptionTypes(optionTypes: SpreeOptionType[] = []): OptionType[] {
    return optionTypes.map(ProductMapper.mapSpreeProductOptionTypeToOptionType);
  }

  static mapSpreeProductOptionValueToOptionValue(optionValue: SpreeOptionValue): OptionValue {
    const isObject = (val: any) => typeof val === 'object' && val !== null;
    const optionType = isObject(optionValue.option_type)
      ? ProductMapper.mapSpreeProductOptionTypeToOptionType({...(optionValue.option_type as any)})
      : optionValue.option_type;
    delete (optionValue as any).option_type;
    return ({
      ...{...optionValue},
      optionType
    }) as OptionValue;
  }

  static mapSpreeProductOptionValuesToOptionValues(optionValues: SpreeOptionValue[] = []): OptionValue[] {
    return optionValues.map(ProductMapper.mapSpreeProductOptionValueToOptionValue);
  }
}
