import { ButtonLink } from "@/app/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";
import { getColorByTheme } from "@/app/lib/color-by-theme";

type Props = {
  skater: Content.SkaterDocument;
  index: number;
};

export function Skater({ skater, index }: Props): JSX.Element {
  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <PrismicNextImage
          field={skater.data.bg_image}
          width={500}
          imgixParams={{ q: 20 }}
          alt=""
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />

        <SkaterScribble
          className={clsx("relative", getColorByTheme(skater.data.theme))}
        />

        <PrismicNextImage
          field={skater.data.fg_image}
          width={500}
          imgixParams={{ q: 20 }}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />

        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span>{skater.data.first_name}</span>
          <span>{skater.data.last_name}</span>
        </h3>
      </div>

      <ButtonLink field={skater.data.customizer_link} size="sm">
        {skater.data.customizer_link.text}
      </ButtonLink>
    </div>
  );
}
