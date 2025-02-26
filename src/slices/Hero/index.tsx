import { asImageSrc, Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { ButtonLink } from "@/app/components/ButtonLink";
import { TallLogo, WideLogo } from "@/app/components/Logo";
import { InteractiveSkateboard } from "./InteractiveSkateboard";
import {
  DEFAULT_BOLT_COLOR,
  DEFAULT_DECK_TEXTURE,
  DEFAULT_TRUCK_COLOR,
  DEFAULT_WHEEL_TEXTURE,
} from "@/app/lib/constants";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const {
    skateboard_deck_texture: deck,
    skateboard_wheel_texture: wheel,
    skateboard_truck_color: truck,
    skateboard_bolt_color: bolt,
  } = slice.primary;
  const deckTextureUrl = asImageSrc(deck) ?? DEFAULT_DECK_TEXTURE;
  const wheelTextureUrl = asImageSrc(wheel) ?? DEFAULT_WHEEL_TEXTURE;
  const truckColor = isFilled.color(truck) ? truck : DEFAULT_TRUCK_COLOR;
  const boltColor = isFilled.color(bolt) ? bolt : DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard
        deckTextureUrl={deckTextureUrl}
        deckTextureUrls={[deckTextureUrl]}
        wheelTextureUrls={[wheelTextureUrl]}
        wheelTextureUrl={wheelTextureUrl}
        truckColor={truckColor}
        boltColor={boltColor}
        constantWheelSpin
      />
    </Bounded>
  );
};

export default Hero;
