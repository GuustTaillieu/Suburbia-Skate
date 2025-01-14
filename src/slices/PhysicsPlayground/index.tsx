import { Logo } from "@/app/components/Logo";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react/jsx-runtime";
import { SkateboardPhysics } from "./SkateboardPhysics";

/**
 * Props for `PhysicsPlayground`.
 */
export type PhysicsPlaygroundProps =
  SliceComponentProps<Content.PhysicsPlaygroundSlice>;

/**
 * Component for "PhysicsPlayground" Slices.
 */
const PhysicsPlayground = ({ slice }: PhysicsPlaygroundProps): JSX.Element => {
  const boardTextures =
    slice.primary.skateboards
      ?.map((skateboard) => asImageSrc(skateboard.skateboard_image, { h: 600 }))
      .filter((url): url is string => !!url) ?? [];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-zinc-900 text-white overflow-hidden drop-shadow-lg shadow-inner shadow-black"
    >
      <div className="relative h-[75vh] ~p-8/10 md:aspect-auto">
        <PrismicNextImage
          field={slice.primary.background_image}
          className="object-cover"
          width={1200}
          fill
        />
        <div className="absolute inset-0 bg-zinc-900 bg-texture opacity-50"></div>

        <SkateboardPhysics
          boardTextureURLs={boardTextures}
          className="absolute overflow-hidden inset-0"
        />

        <div className="relative w-full ~h-16/20 flex justify-between">
          <Logo className="pointer-events-none h-full mix-blend-exclusion" />
          <PrismicRichText field={slice.primary.image_copyright} />
        </div>
      </div>
    </section>
  );
};

export default PhysicsPlayground;
