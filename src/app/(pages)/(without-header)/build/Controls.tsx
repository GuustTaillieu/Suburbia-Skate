"use client";

import { Heading } from "@/app/components/Heading";
import {
  ColorField,
  Content,
  ImageField,
  isFilled,
  KeyTextField,
} from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicImageProps } from "@prismicio/react";
import clsx from "clsx";
import { ComponentProps, ReactNode, useEffect } from "react";
import { useCustomizerControls } from "./build-context";
import { useRouter } from "next/navigation";

type Props = Pick<
  Content.SkateboardCustomizerDocumentData,
  "wheels" | "decks" | "metals"
> & {
  className?: string;
};

export const Controls = ({ wheels, decks, metals, className }: Props) => {
  const {
    setBolt,
    setDeck,
    setTruck,
    setWheel,
    selectedDeck,
    selectedBolt,
    selectedWheel,
    selectedTruck,
  } = useCustomizerControls();
  const router = useRouter();

  useEffect(() => {
    const url = new URL(window.location.href);

    [
      { param: "deck", value: selectedDeck?.uid },
      { param: "wheel", value: selectedWheel?.uid },
      { param: "truck", value: selectedTruck?.uid },
      { param: "bolt", value: selectedBolt?.uid },
    ].forEach(({ param, value }) => {
      if (isFilled.keyText(value)) {
        url.searchParams.set(param, value);
      }
    });

    router.replace(url.href);
  }, [router, selectedBolt, selectedDeck, selectedTruck, selectedWheel]);

  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={selectedDeck?.uid}>
        {decks.map((deck) => (
          <Option
            key={deck.uid}
            selected={selectedDeck?.uid === deck.uid}
            imageField={deck.texture}
            imgixParams={{
              rect: [20, 1550, 1000, 1000],
              width: 150,
              height: 150,
            }}
            onClick={() => setDeck(deck)}
          >
            {deck.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>

      <Options title="Wheel" selectedName={selectedWheel?.uid}>
        {wheels.map((wheel) => (
          <Option
            key={wheel.uid}
            selected={selectedWheel?.uid === wheel.uid}
            imageField={wheel.texture}
            imgixParams={{
              rect: [20, 10, 850, 850],
              width: 150,
              height: 150,
            }}
            onClick={() => setWheel(wheel)}
          >
            {wheel.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>

      <Options title="Truck" selectedName={metals[0]?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            selected={selectedTruck?.uid === metal.uid}
            colorField={metal.color}
            onClick={() => setTruck(metal)}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>

      <Options title="Bolt" selectedName={metals[0]?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            selected={selectedBolt?.uid === metal.uid}
            colorField={metal.color}
            onClick={() => setBolt(metal)}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
    </div>
  );
};

type OptionsProps = {
  title: ReactNode;
  selectedName?: KeyTextField;
  children: ReactNode;
};

function Options({ title, selectedName, children }: OptionsProps) {
  const formattedName = selectedName
    ?.split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="">
      <div className="flex">
        <Heading as="h2" size="xs" className="mb-2">
          {title}
        </Heading>

        <p className="ml-3 text-zinc-300">
          <span className="select-none text-zinc-500">| </span>
          {formattedName}
        </p>
      </div>

      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

type OptionProps = Omit<ComponentProps<"button">, "children"> & {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
} & (
    | {
      imageField: ImageField;
      imgixParams?: PrismicImageProps["imgixParams"];
      colorField?: never;
    }
    | {
      colorField: ColorField;
      imageField?: never;
      imgixParams?: never;
    }
  );

function Option({
  selected,
  imageField,
  imgixParams,
  colorField,
  children,
  onClick,
}: OptionProps) {
  return (
    <li>
      <button
        className={clsx(
          "size-10 cursor-pointer rounded-full bg-black p-0.5 outline-1 outline-white",
          selected && "outline",
        )}
        onClick={onClick}
      >
        {imageField ? (
          <PrismicNextImage
            field={imageField}
            imgixParams={imgixParams}
            className="pointer-events-none size-full rounded-full"
            alt=""
          />
        ) : (
          <div
            className="size-full rounded-full"
            style={{ backgroundColor: colorField ?? undefined }}
          />
        )}

        <span className="sr-only">{children}</span>
      </button>
    </li>
  );
}
