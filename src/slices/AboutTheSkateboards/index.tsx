import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";
import { ParallaxImage } from "@/app/components/ParallaxImage";
import { JSX } from "react/jsx-runtime";
import { getBgColorByTheme } from "@/app/lib/color-by-theme";
import { SlideInAnimation } from "@/app/components/SlideInAnimation";

/**
 * Props for `AboutTheSkateboards`.
 */
export type AboutTheSkateboardsProps =
  SliceComponentProps<Content.AboutTheSkateboardsSlice>;

/**
 * Component for "AboutTheSkateboards" Slices.
 */
const AboutTheSkateboards = ({
  slice,
  index,
}: AboutTheSkateboardsProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        getBgColorByTheme(slice.primary.theme),
        "bg-texture sticky top-[calc(var(--index)*2rem)] drop-shadow-up",
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            slice.variation == "imageOnLeft" ? "md:order-2" : "",
          )}
        >
          <SlideInAnimation>
            <Heading as="h2" size="lg">
              <PrismicText field={slice.primary.heading} />
            </Heading>
          </SlideInAnimation>

          <SlideInAnimation>
            <div className="max-w-md text-lg leading-relaxed">
              <PrismicRichText field={slice.primary.body} />
            </div>
          </SlideInAnimation>

          <SlideInAnimation>
            <ButtonLink
              field={slice.primary.button}
              color={slice.primary.theme == "Lime" ? "orange" : "lime"}
            >
              {slice.primary.button.text}
            </ButtonLink>
          </SlideInAnimation>
        </div>

        <ParallaxImage
          foreground={slice.primary.foreground_image}
          background={slice.primary.background_image}
        />
      </div>
    </Bounded>
  );
};

export default AboutTheSkateboards;
