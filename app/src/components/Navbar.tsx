"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react';
import { projects } from '../data/projectData';
// import { upcomingProjects } from '../data/upcomingProjects';
import { company } from '../data/companyData';
import { categoryLabel, categoryOf } from '../utils/projectSpaces';

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/#contact' },
];

const mobileLinkCls = 'rounded px-3 py-2.5 text-sm font-medium text-navy hover:bg-white';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = usePathname();
  const onProject = pathname.startsWith('/projects');
  const ctaHref = onProject ? `${pathname}#enquire` : '/#contact';

  const navCls = (active: boolean) =>
    `text-[15px] font-medium transition-colors duration-150 hover:text-teal ${active ? 'text-teal' : 'text-navy'}`;

  const closeAll = () => {
    setOpen(false);
    setProjectsOpen(false);
  };

  return (
    <header id="top" className="sticky top-0 z-40">
      <div className="hidden bg-navy text-xs text-white/75 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 lg:px-8">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            RERA Registered Agent · <span className="font-medium text-white">{company?.rera?.agentNumber}</span>
          </p>
          <div className="flex items-center gap-6">
            <span>{company?.officeHours}</span>
            <a href={company?.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-gold">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-muted/50 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={40} height={40} alt="" draggable="false" />
            <Link href="/" className="text-lg font-semibold text-navy">
              Downtown Realty
            </Link>
          </div>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            <Link href="/" className={navCls(pathname === '/')}>Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
              onKeyDown={(e) => e.key === 'Escape' && setProjectsOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${navCls(onProject)}`}
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                onClick={() => setProjectsOpen((v) => !v)}
              >
                Projects
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${projectsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <div
                inert={!projectsOpen}
                className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 transition-[opacity,translate,scale,visibility] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none ${
                  projectsOpen
                    ? 'visible translate-y-0 scale-100 opacity-100'
                    : 'invisible translate-y-1.5 scale-[0.97] opacity-0'
                }`}
              >
                <div className="rounded-lg border border-muted/50 bg-white p-2 shadow-[0_24px_50px_-24px_rgba(28,26,23,0.35)]">
                  <p className="px-3 pb-1 pt-2 text-[11px] font-semibold text-teal">Available at builder price</p>
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      onClick={closeAll}
                      className="block rounded px-3 py-2.5 transition-colors duration-150 hover:bg-canvas"
                    >
                      <span className="block text-sm font-semibold text-navy">{p.name}</span>
                      <span className="block text-xs text-ink">
                        {p.locality} · {categoryLabel(categoryOf(p))} · from {p.priceFrom}
                      </span>
                    </Link>
                  ))}

                  <div className="my-1 border-t border-muted/40" />
                  <p className="px-3 pb-1 pt-2 text-[11px] font-semibold text-teal">Coming soon</p>
                  {/* {upcomingProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/upcoming/${p.slug}`}
                      onClick={closeAll}
                      className="block rounded px-3 py-2 transition-colors duration-150 hover:bg-canvas"
                    >
                      <span className="block text-sm font-semibold text-navy">{p.name}</span>
                      <span className="block text-xs text-ink">
                        {p.locality ?? p.city} · {p.offering}{p.ownProject ? ' · Our own project' : ''}
                      </span>
                    </Link>
                  ))} */}

                  <div className="my-1 border-t border-muted/40" />
                  <Link
                    href="/#projects"
                    onClick={closeAll}
                    className="block rounded px-3 py-2.5 text-sm font-semibold text-teal hover:bg-canvas"
                  >
                    View all projects
                  </Link>
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link key={l.label} href={l.href} className={navCls(pathname === l.href)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={company?.phones?.[0]?.tel} className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-navy hover:text-teal">
              <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
              {company?.phones?.[0]?.display}
            </a>
            <Link
              href={ctaHref}
              className="whitespace-nowrap rounded bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-teal"
            >
              Book Site Visit
            </Link>
          </div>

          <button
            type="button"
            className="rounded p-2 text-navy lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        inert={!open}
        className={`grid bg-canvas transition-[grid-template-rows,opacity] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none lg:hidden ${
          open ? 'grid-rows-[1fr] border-b border-muted/50 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            <Link href="/" onClick={closeAll} className={mobileLinkCls}>Home</Link>
            {projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} onClick={closeAll} className={mobileLinkCls}>
                {p.name}
              </Link>
            ))}
            <Link href="/#upcoming" onClick={closeAll} className={mobileLinkCls}>
              Upcoming Projects
            </Link>
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={closeAll} className={mobileLinkCls}>
                {l.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href={company?.phones?.[0]?.tel} className="flex items-center justify-center gap-2 rounded border border-navy px-4 py-3 text-sm font-medium text-navy">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call
              </a>
              <Link href={ctaHref} onClick={closeAll} className="rounded bg-navy px-4 py-3 text-center text-sm font-medium text-white">
                Book Site Visit
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;