import { Bounded } from "@/app/components/Bounded";
import { Heading } from "@/app/components/Heading";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react/jsx-runtime";
import { Skater } from "./Skater";
import { SlideInAnimation } from "@/app/components/SlideInAnimation";

/**
 * Props for `TeamMembers`.
 */
export type TeamMembersProps = SliceComponentProps<Content.TeamMembersSlice>;

/**
 * Component for "TeamMembers" Slices.
 */
const TeamMembers = async ({
  slice,
}: TeamMembersProps): Promise<JSX.Element> => {
  const client = createClient();
  const skaters = await client.getAllByType("skater");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-navy"
    >
      <SlideInAnimation>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideInAnimation>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <SlideInAnimation key={skater.id} delay={index * 100 + 200}>
            <Skater skater={skater} index={index} />
          </SlideInAnimation>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamMembers;
