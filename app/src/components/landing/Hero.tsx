import Link from 'next/link';
// import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { SearchBar } from './SearchBar';
// import { images } from '../data/images';
import { projects } from '../../data/projectData';

const promises = [
  { value: '₹0', label: 'Brokerage for buyers' },
  { value: '100%', label: 'Builder’s own price' },
  { value: 'RERA', label: 'Verified projects only' },
];

const Hero = () => {
  const spotlight = projects.find((p) => p.slug === 'green-valley-enclave') ?? projects[0];

  return (
    <section className="bg-white px-5 pb-16 pt-10 lg:px-8 lg:pb-20 lg:pt-14" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium text-teal">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Flats &amp; plots in Patna
            </p>
            <h1
              id="hero-title"
              className="mt-6 text-[44px] font-semibold leading-[1.02] text-navy sm:text-6xl lg:text-[76px]"
            >
              Your key to a home in Patna, at the <em className="font-semibold text-teal">builder&apos;s price.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink">
              We&apos;re the sales partner for trusted RERA-registered builders. You pay exactly their price — no brokerage, no
              mark-up — and get our team from first visit to registry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded bg-navy px-7 py-3.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-teal"
              >
                Book a free site visit
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 rounded border border-navy/25 px-7 py-3.5 text-sm font-medium text-navy transition-colors duration-150 hover:border-navy"
              >
                Explore projects <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 divide-x divide-muted/70 border-t border-muted/70 pt-6">
              {promises.map((p) => (
                <div key={p.label} className="px-4 first:pl-0">
                  <dt className="sr-only">{p.label}</dt>
                  <dd className="font-display text-3xl font-bold text-navy lg:text-4xl">{p.value}</dd>
                  <dd className="mt-1 text-xs leading-snug text-ink">{p.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-b-lg rounded-t-[999px] border-10 border-white shadow-[0_40px_80px_-40px_rgba(28,26,23,0.45)]">
              {/*<Image
                src={images.hero}
                alt="Residential towers in Patna with a landscaped entrance"
                width={800}
                height={1000}
                sizes="(min-width: 1024px) 50vw, 448px"
                priority
                className="aspect-4/5 w-full object-cover"
              /> */}
            </div>
            <Link
              href={`/projects/${spotlight.slug}`}
              className="group absolute -left-2 bottom-10 flex items-center gap-4 rounded-lg bg-white p-4 pr-5 shadow-[0_20px_40px_-20px_rgba(28,26,23,0.4)] sm:-left-8"
            >
              {/* <Image src={spotlight.image} alt="" width={56} height={56} className="h-14 w-14 rounded object-cover" /> */}
              <span>
                <span className="block text-[11px] font-medium text-teal">Starting at</span>
                <span className="block font-display text-2xl font-bold leading-none text-navy">{spotlight.priceFrom}</span>
                <span className="mt-1 block text-xs text-ink">{spotlight.name}, {spotlight.locality}</span>
              </span>
              <ArrowRightIcon className="h-4 w-4 text-teal transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 lg:mt-16">
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;