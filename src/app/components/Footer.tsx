import { createClient } from "@/prismicio";
import { Bounded } from "./Bounded";
import { PrismicNextLink } from "@prismicio/next";

export async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className="bg-zinc-900 bg-texture text-white">
      <nav>
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
          {settings.data.top_navigation.map((item) => (
            <li key={item.link.text} className="hover:underline">
              <PrismicNextLink field={item.link} />
            </li>
          ))}
        </ul>
      </nav>
    </Bounded>
  );
}
