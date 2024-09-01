import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
import { ContextAlert } from 'components/context-alert';
import { getNetlifyContext } from 'utils';
import Herobanner from 'public/images/IMG_1149.png';

const cards = [
    //{ text: 'Hello', linkText: 'someLink', href: '/' }
];

const contextExplainer = `
 I like to Video Edit, Code, and Dank Meme <br>
 im Starting to learn AI art turn in to Meme 
`;

const preDynamicContentExplainer = `
The card content below is fetched by the client-side from \`/quotes/random\` (see file \`app/quotes/random/route.js\`) with a different quote shown on each page load:
`;

const postDynamicContentExplainer = `
On Netlify, Next.js Route Handlers are automatically deployed as [Serverless Functions](https://docs.netlify.com/functions/overview/).
Alternatively, you can add Serverless Functions to any site regardless of framework, with access to the [full context data](https://docs.netlify.com/functions/api/).

And as always with dynamic content, beware of layout shifts & flicker! (here, we aren't...)
`;

const ctx = getNetlifyContext();

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            {/* Hero Banner Section */}
            <section className="relative">
                <Image
                    src={Herobanner}
                    alt="Hero Banner"
                    layout="responsive"
                    width={1920} 
                    height={1080}
                    className="object-cover"
                />
            </section>
            
            <section className="flex flex-col items-start gap-3  sm:gap-4">
                <ContextAlert />
                <h1 className="mb-0 text-center" style="text-align: center;">Joeffrey B. Lazarte</h1>
            </section>

            <section className="flex flex-col gap-4">
                <Markdown content={contextExplainer} />

            </section>

            <section className="flex flex-col gap-4">
                <Markdown content={preDynamicContentExplainer} />
                <RandomQuote />
                <Markdown content={postDynamicContentExplainer} />
            </section>
            {/* !!cards?.length && <CardsGrid cards={cards} /> */}
        </main>
    );
}
