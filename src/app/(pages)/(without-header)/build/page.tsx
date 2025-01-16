import { ButtonLink } from "@/app/components/ButtonLink";
import { Heading } from "@/app/components/Heading";
import { CustomizerControlsProvider } from "./build-context";
import { createClient } from "@/prismicio";
import { Preview } from "./Preview";
import { asImageSrc } from "@prismicio/client";
import { Controls } from "./Controls";
import Loading from "./Loading";

type SearchParams = {
  wheel?: string;
  deck?: string;
  truck?: string;
  bolt?: string;
};

export default async function Page(props: {
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;

  const client = createClient();
  const customizerSettings = await client.getSingle("skateboard_customizer");
  const { decks, wheels, metals } = customizerSettings.data;

  const defaultDeck =
    decks.find((deck) => deck.uid === searchParams.deck) ?? decks[0];
  const defaultWheel =
    wheels.find((wheel) => wheel.uid === searchParams.wheel) ?? wheels[0];
  const defaultTruck =
    metals.find((metal) => metal.uid === searchParams.truck) ?? metals[0];
  const defaultBolt =
    metals.find((metal) => metal.uid === searchParams.bolt) ?? metals[0];

  console.log(searchParams.deck, defaultDeck);

  const wheelTextureUrls = wheels
    .map((wheel) => asImageSrc(wheel.texture))
    .filter((url): url is string => Boolean(url));

  const deckTextureUrls = decks
    .map((deck) => asImageSrc(deck.texture))
    .filter((url): url is string => Boolean(url));

  return (
    <CustomizerControlsProvider
      defaultDeck={defaultDeck}
      defaultWheel={defaultWheel}
      defaultTruck={defaultTruck}
      defaultBolt={defaultBolt}
    >
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="relative aspect-square shrink-0 bg-zinc-700 lg:aspect-auto lg:grow">
          <div className="absolute inset-0">
            <Preview
              wheelTextureUrls={wheelTextureUrls}
              deckTextureUrls={deckTextureUrls}
            />
          </div>
        </div>
        <div className="grow bg-texture  bg-zinc-900 text-white ~p-4/6 lg:w-96 lg:shrink-0 lg:grow-0 grid grid-rows-[min-content,max-content,auto]">
          <Heading as="h1" size="sm" className="mb-6 mt-0">
            Build your board
          </Heading>

          <div className="self-start">
            <Controls wheels={wheels} decks={decks} metals={metals} />
          </div>

          <ButtonLink
            href="#"
            color="lime"
            icon="plus"
            className="self-end justify-self-start"
          >
            Add to cart
          </ButtonLink>
        </div>

        <Loading />
      </div>
    </CustomizerControlsProvider>
  );
}
