import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideInAnimation } from "@/app/components/SlideInAnimation";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray"
    >
      <SlideInAnimation>
        <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideInAnimation>

      <SlideInAnimation>
        <div className="text-center ~mb-6/10">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </SlideInAnimation>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.product.map(
          ({ skateboard }, index) =>
            isFilled.contentRelationship(skateboard) && (
              <SlideInAnimation delay={index * 100 + 200} key={skateboard.id}>
                <SkateboardProduct id={skateboard.id} />
              </SlideInAnimation>
            ),
        )}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
