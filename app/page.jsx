import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import { Card } from 'components/card';
import { RandomQuote } from 'components/random-quote';
import { Markdown } from 'components/markdown';
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

const qaData = [
    {
        question: 'What is your Favorite game?',
        answer: 'Elder Ring',
        questionColor: 'text-blue-600',
        answerColor: 'text-gray-800'

    },
    {
        question: 'What is your First Steam game?',
        answer: 'Portal 2',
        questionColor: 'text-blue-600',
        answerColor: 'text-gray-800'

    },
    {
        question: 'What is your Favorite Meme?',
        answer: 'SpongeBob Squarepants',
        questionColor: 'text-blue-600',
        answerColor: 'text-gray-800'

    }
];

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
            
            <section className="flex flex-col items-start gap-3 sm:gap-4 text-center">
                <h1 className="mb-0 text-center" style={{ textAlign: 'center' }}>Joeffrey B. Lazarte</h1>
            </section>

            <section className="flex flex-col gap-4">
                <Markdown content={contextExplainer} />
            </section>

            <section className="flex flex-col gap-4">
                <h2>Q&A</h2>
                {qaData.map((item, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold">{item.question}</h3>
                        <p className="mt-2">{item.answer}</p>
                    </div>
                ))}
            </section>

        </main>
    );
}
