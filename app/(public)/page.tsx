import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PricingModels from "@/components/PricingModels";
import TextWithImage from "@/components/TextWithImage";
import { client } from "@/sanity/lib/client";
import { homepageQuery } from "@/sanity/lib/queries";
import Link from "next/link";

export default async function Home() {
  const data = await client.fetch(homepageQuery)

  return (
    <div className="p-4 space-y-2">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          Welcome to the next-sanity-client-template
        </h1>
        <p>This template is ment to be used to quickly build client websites. Included in this template are pages setup for homepage, about and contact. I've also setup the not-found page at <Link className="text-blue-500 underline" href={'/not-found'}>/not-found</Link> if you would like to style that as well.</p>
      </div>
      <div>
        <p>
          To get started clone the github repo using:
          <code className="text-sm bg-zinc-100 dark:bg-zinc-700 rounded p-1"> git clone https://github.com/briannelson95/next-sanity-client-template.git</code>
          <br />
          And follow the <a className="underline text-blue-500" href="https://github.com/briannelson95/next-sanity-client-template">instructions on github</a>
        </p>
      </div>
    </div>
  );
}
