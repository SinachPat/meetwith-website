import svgPaths from "../imports/svg-l54ppa69cx";
import imgDiscoverTime1 from "@/assets/Discovertime.png";
import groupDemoVideo from "@/assets/group-demo.mp4";
import imgGeminiGeneratedImageJzer4Rjzer4Rjzer1 from "@/assets/8deb71f26c0ddbcdb1ce5946962cefe6adb93e5c.png";
import { useState } from "react";
import { Link } from "react-router";
import {
  Users,
  GraduationCap,
  Award,
  MessageSquare,
  Globe,
  Briefcase,
  RefreshCw,
  Eye,
  Zap,
  ShieldCheck,
  LayoutDashboard,
  Quote,
} from "lucide-react";
import { landingFaqs } from "./faqs";

function LogoV() {
  return (
    <div className="h-[33px] relative shrink-0 w-[52.933px]" data-name="logo-V1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52.9329 33">
        <g id="logo-V1">
          <path d={svgPaths.p1364b580} fill="var(--fill-0, #D93F0C)" id="Vector" />
          <path d={svgPaths.p2262ed00} fill="var(--fill-0, #D93F0C)" id="Vector_2" />
          <path d={svgPaths.p18e0f380} fill="var(--fill-0, #D93F0C)" id="Vector_3" />
          <path d={svgPaths.p18c59250} fill="var(--fill-0, #F35826)" id="Vector_4" />
          <path d={svgPaths.p3b7c4280} fill="var(--fill-0, #F35826)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function NavLinks() {
  return (
    <nav className="hidden md:flex gap-4 items-center">
      <a href="#home" className="px-4 py-2 font-['DM_Sans'] font-bold text-[#f35826] text-base">
        Home
      </a>
      <a href="#features" className="px-4 py-2 font-['DM_Sans'] font-medium text-[#e4e7eb] text-base hover:text-[#f35826] transition-colors">
        Features
      </a>
      <a href="#plans" className="px-4 py-2 font-['DM_Sans'] font-medium text-[#e4e7eb] text-base hover:text-[#f35826] transition-colors">
        Plans
      </a>
      <Link to="/faqs" className="px-4 py-2 font-['DM_Sans'] font-medium text-[#e4e7eb] text-base hover:text-[#f35826] transition-colors">
        FAQ
      </Link>
    </nav>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 bg-[#131a20]">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#323f4b]">
          <LogoV />
          <button onClick={onClose} className="p-2 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4 flex-1">
          <a href="#home" onClick={onClose} className="px-4 py-3 font-['DM_Sans'] font-bold text-[#f35826] text-lg">
            Home
          </a>
          <a href="#features" onClick={onClose} className="px-4 py-3 font-['DM_Sans'] font-medium text-[#e4e7eb] text-lg hover:text-[#f35826] transition-colors">
            Features
          </a>
          <a href="#plans" onClick={onClose} className="px-4 py-3 font-['DM_Sans'] font-medium text-[#e4e7eb] text-lg hover:text-[#f35826] transition-colors">
            Plans
          </a>
          <Link to="/faqs" onClick={onClose} className="px-4 py-3 font-['DM_Sans'] font-medium text-[#e4e7eb] text-lg hover:text-[#f35826] transition-colors">
            FAQ
          </Link>
        </nav>
        <div className="p-4 border-t border-[#323f4b]">
          <button className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors flex gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg w-full">
            <svg className="w-[18px] h-4" fill="none" viewBox="0 0 18 16">
              <path d={svgPaths.p2f84a300} fill="#F5F7FA" />
            </svg>
            <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Sign in</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[25px] bg-[rgba(19,26,32,0.1)] border-b border-[#323f4b]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-13 py-4 md:py-5 flex items-center">
          <div className="flex-1">
            <LogoV />
          </div>
          <NavLinks />
          <div className="flex-1 flex items-center justify-end gap-4">
            <button className="hidden md:flex bg-[#f46739] hover:bg-[#d93f0c] transition-colors gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg shrink-0">
              <svg className="w-[18px] h-4" fill="none" viewBox="0 0 18 16">
                <path d={svgPaths.p2f84a300} fill="#F5F7FA" />
              </svg>
              <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Sign in</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Radial fade mask — grid visible in center, fades at edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
        }}
      />
      {/* Dot intersections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(244,103,57,0.25) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, black 30%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 70% at 50% 0%, black 30%, transparent 90%)',
        }}
      />
      {/* Orange radial glow from top-left (behind hero text) */}
      <div
        className="absolute"
        style={{
          top: '-10%',
          left: '-5%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(244,103,57,0.12) 0%, transparent 70%)',
        }}
      />
      {/* Subtle blue-teal accent glow top-right */}
      <div
        className="absolute"
        style={{
          top: '-5%',
          right: '5%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative w-full pt-32 md:pt-40 pb-0 px-4 md:px-8 lg:px-[131px]">
      <GridBackground />
      <div className="relative max-w-[1152px] mx-auto w-full">
        <h1 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-6">
          Schedule the same group again and again<br />
          Meetwith remembers them for you
        </h1>
        <p className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5] mb-6">
          No back and forth, no starting from scratch
        </p>
        <button className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors flex gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg mb-3">
          <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Create your group</span>
          <svg className="w-[10.667px] h-[9.333px] -scale-y-100" fill="none" viewBox="0 0 16 14">
            <path d={svgPaths.p317c9f00} fill="#F5F7FA" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function ImageShowcase() {
  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] pt-2">
      <div className="relative w-full max-w-[1152px] mx-auto rounded-lg overflow-hidden border border-[#3e4c59]">
        <video
          src={groupDemoVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

function HighlightedBox() {
  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] mt-8 md:mt-10">
      <div className="relative max-w-[1159px] mx-auto w-full">
        <div className="bg-[#1f2933] border border-[#3e4c59] rounded-[10px] p-6 md:p-[25px]">
          <p className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5]">
            When your cohort, community, or portfolio spans Google, Outlook, any calendar and people who won't share their calendar at all — Meetwith lets you create a reusable group once and schedule every future meeting in under 90 seconds.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] pt-8 md:pt-12 pb-10 md:pb-16">
      <GridBackground />
      <div className="relative max-w-[1152px] mx-auto w-full">
        <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-4">
          We solve the right <span className="text-[#f46739]">problem</span>
        </h2>
        <div className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5] space-y-4">
          <p>
            Doodle sends a one-time poll. Calendly books an inbound call. AI tools like Reclaim and Motion require calendar access that people across different organizations often can't or won't grant.
          </p>
          <p>
            Stop remembering things on your own, details, emails, calendar availabilities, Meetwith is the alternative you are looking. Cross-org coordination with the same group of people.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors flex gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg">
            <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Get started for FREE</span>
            <svg className="w-[10.667px] h-[9.333px] -scale-y-100" fill="none" viewBox="0 0 16 14">
              <path d={svgPaths.p317c9f00} fill="#F5F7FA" />
            </svg>
          </button>
          <button className="bg-[#e4e7eb] hover:bg-[#d1d5db] transition-colors flex gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg">
            <span className="font-['DM_Sans'] font-bold text-[#323f4b] text-base text-center">Book a walkthrough</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="features" className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-10 md:py-16">
      <div className="max-w-[1152px] mx-auto w-full">
        <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-8">
          How <span className="text-[#f46739]">Meetwith</span> Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[53px] mb-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[15px]">
              <div className="bg-[#52606d] flex items-center justify-center rounded-full w-[30px] h-[30px]">
                <span className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">1</span>
              </div>
              <h3 className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">
                Create a reusable group
              </h3>
            </div>
            <p className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5]">
              Set up your group once with everyone who needs to meet regularly — cohort participants, portfolio companies, community members, external partners. No rebuilding lists. No re-confirming attendees.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[15px]">
              <div className="bg-[#52606d] flex items-center justify-center rounded-full w-[30px] h-[30px]">
                <span className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">2</span>
              </div>
              <h3 className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">
                Members share availability
              </h3>
            </div>
            <p className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5]">
              People join and share availability on their own terms, without exposing their full calendar. You instantly see which times work for the whole group. Scheduling stops being guesswork.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[15px]">
              <div className="bg-[#52606d] flex items-center justify-center rounded-full w-[30px] h-[30px]">
                <span className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">3</span>
              </div>
              <h3 className="font-['DM_Sans'] font-bold text-white text-2xl leading-[1.2]">
                Schedule in one action
              </h3>
            </div>
            <p className="font-['DM_Sans'] font-medium text-white text-base leading-[1.5]">
              See the overlap. Pick the time. Create your meeting. Done. The same group is ready for next week's call — no setup required.
            </p>
          </div>
        </div>
        <div className="relative w-full aspect-video max-w-[1152px] rounded-[15px] overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/Fh4Chd-DxEs?list=PL_8jZMxhZaVWsIavN3-ZwJ3Gqc7gLiXto&start=27"
            title="How Meetwith Works"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors flex gap-3 h-12 items-center justify-center px-4 py-2 rounded-lg mt-8">
          <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Get started for FREE</span>
          <svg className="w-[10.667px] h-[9.333px] -scale-y-100" fill="none" viewBox="0 0 16 14">
            <path d={svgPaths.p317c9f00} fill="#F5F7FA" />
          </svg>
        </button>
      </div>
    </section>
  );
}


function WhoItsForSection() {
  const roles = [
    {
      Icon: Users,
      title: "Program Manager",
      subtitle: "Director / Lead",
      description: "Coordinate recurring check-ins and milestone reviews across your entire program cohort.",
    },
    {
      Icon: GraduationCap,
      title: "Cohort Manager",
      subtitle: "Coordinator",
      description: "Keep your cohort in sync. Schedule group sessions without the endless back-and-forth.",
    },
    {
      Icon: Award,
      title: "Fellowship Manager",
      subtitle: "Director",
      description: "Manage fellow touchpoints and group workshops with reusable scheduling groups.",
    },
    {
      Icon: MessageSquare,
      title: "Community Lead",
      subtitle: "Manager / Head of Community",
      description: "Run community calls and AMAs effortlessly — even across members who won't share calendars.",
    },
    {
      Icon: Globe,
      title: "Ecosystem Lead",
      subtitle: "Manager",
      description: "Align stakeholders across organizations, time zones, and calendar systems seamlessly.",
    },
    {
      Icon: Briefcase,
      title: "Portfolio Operations",
      subtitle: "Portfolio Ops",
      description: "Schedule portfolio-wide check-ins and founder syncs that repeat without setup overhead.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-10 md:py-16">
      <div className="max-w-[1152px] mx-auto w-full">
        <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-4">
          Who Meetwith is for
        </h2>
        <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-base leading-[1.5] mb-10 max-w-[600px]">
          Built for the people who run recurring multi-person programs — across orgs, time zones, and mixed calendar stacks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {roles.map(({ Icon, title, subtitle, description }, index) => (
            <div
              key={index}
              className="group relative flex flex-col gap-4 p-6 rounded-xl border border-[#2d3c4a] bg-gradient-to-br from-[#1a2530] to-[#131a20] hover:border-[#f46739] hover:from-[#1f2e3a] hover:to-[#161f27] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Subtle orange glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f46739] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon container */}
              <div className="w-11 h-11 rounded-lg bg-[rgba(244,103,57,0.12)] border border-[rgba(244,103,57,0.25)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(244,103,57,0.2)] transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#f46739]" strokeWidth={1.75} />
              </div>

              {/* Text content */}
              <div className="flex flex-col gap-1">
                <h3 className="font-['DM_Sans'] font-bold text-white text-lg leading-[1.3]">
                  {title}
                </h3>
                <p className="font-['DM_Sans'] font-medium text-[#f46739] text-sm leading-[1.4] opacity-80">
                  {subtitle}
                </p>
              </div>

              <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-sm leading-[1.6]">
                {description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full bg-[rgba(244,103,57,0.04)] group-hover:bg-[rgba(244,103,57,0.08)] transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouGetSection() {
  const features = [
    {
      Icon: RefreshCw,
      title: "Reusable groups",
      description: "Reuse the same group for every recurring call — no starting from scratch.",
    },
    {
      Icon: Eye,
      title: "Real-time tracking",
      description: "See who's in and who hasn't shared availability yet. No inbox archaeology.",
    },
    {
      Icon: Zap,
      title: "90-second scheduling",
      description: "Schedule recurring sessions faster once your group is connected. The second meeting takes 90 seconds.",
    },
    {
      Icon: ShieldCheck,
      title: "Privacy-safe",
      description: "Privacy-safe scheduling across mixed calendars — Google, Outlook, iCloud, or none at all.",
    },
    {
      Icon: LayoutDashboard,
      title: "One shared place",
      description: "One shared place for scheduling decisions. No scattered threads or lost emails.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-10 md:py-16">
      <div className="max-w-[1152px] mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left: sticky heading */}
        <div className="lg:w-[360px] flex-shrink-0 lg:sticky lg:top-32 lg:self-start">
          <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-4">
            What you get
          </h2>
          <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-base leading-[1.5]">
            Everything you need to go from "we should meet" to "it's on the calendar" — without the overhead.
          </p>
        </div>

        {/* Right: feature list with left accent borders */}
        <div className="flex-1 flex flex-col gap-0">
          {features.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 py-7 border-b border-[#2d3c4a] last:border-b-0 first:pt-0 cursor-default"
            >
              {/* Vertical accent line + icon */}
              <div className="relative flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full border border-[#3e4c59] group-hover:border-[#f46739] group-hover:bg-[rgba(244,103,57,0.1)] flex items-center justify-center transition-all duration-300">
                  <Icon className="w-[18px] h-[18px] text-[#616e7c] group-hover:text-[#f46739] transition-colors duration-300" strokeWidth={1.75} />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1 pt-1.5">
                <h3 className="font-['DM_Sans'] font-bold text-white text-lg leading-[1.3] group-hover:text-[#f46739] transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-sm leading-[1.6]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Roso",
      quote:
        "I've used MeetWith almost every day for the past 3 years. It helped me and my team quickly schedule group calls and made it easier to go from thinking about the people I want to meet with to having a meeting booked with them. Since using it, scheduling meetings became effortless.",
    },
    {
      name: "Susana",
      quote:
        "I was managing double-booked meetings and cross-coordination issues, and I was at risk of losing clients and projects. I needed something that could allow me to handle group meetings, to get 1:1s, and get all my emails and calendars in one place. Meetwith was the only answer, since all competitors failed and are just too pricey.",
    },
    {
      name: "Yineisy",
      quote:
        "I was looking for a way to diversify the way my clients could pay for their consults, and Meetwith fit perfectly. Now my clients can choose to pay in crypto or credit card, and I can customize different time lengths for the type of consults. My work is easier now.",
    },
    {
      name: "Stella",
      quote:
        "Meetwith is amazing, one call and one demo, and I switched it out against Calendly, cause it is just better and more versatile! It's based on decentralized technologies and has more competitive pricing.",
    },
    {
      name: "Daniel",
      quote:
        "Meetwith has saved me countless hours of admin. When you want to move fast and work across teams, tools like Calendly, cal.com, and lettucemeet dont cut it. Meetwith increases our productivity.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-10 md:py-16">
      <GridBackground />
      <div className="relative max-w-[1152px] mx-auto w-full">
        <div className="max-w-[720px] mb-10">
          <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-4">
            What customers say about <span className="text-[#f46739]">Meetwith</span>
          </h2>
          <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-base leading-[1.5]">
            Teams using Meetwith talk about speed, flexibility, and finally having one place to coordinate recurring meetings that other tools make painful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {testimonials.map(({ name, quote }) => (
            <article
              key={name}
              className="relative h-full rounded-xl border border-[#2d3c4a] bg-[linear-gradient(180deg,rgba(31,41,51,0.92)_0%,rgba(19,26,32,0.98)_100%)] p-6 md:p-7"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-['DM_Sans'] font-bold text-white text-xl leading-[1.3]">{name}</h3>
                  <p className="font-['DM_Sans'] font-medium text-[#f46739] text-sm leading-[1.4]">
                    Meetwith customer
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(244,103,57,0.25)] bg-[rgba(244,103,57,0.12)]">
                  <Quote className="h-5 w-5 text-[#f46739]" strokeWidth={1.75} />
                </div>
              </div>

              <p className="font-['DM_Sans'] font-medium text-[#e4e7eb] text-base leading-[1.7]">
                "{quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  buttonText, 
  isPro = false 
}: { 
  title: string; 
  price: string; 
  period: string; 
  features: string[]; 
  buttonText: string;
  isPro?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[25px] h-full">
      <div className="backdrop-blur-[12.5px] bg-[#131a20] border border-[#3e4c59] rounded-lg p-6 flex-1">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="font-['DM_Sans'] font-bold text-[#f46739] text-xl">{title}</h3>
          <div className="flex items-end gap-2">
            <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-[39.06px] leading-[1.2]">{price}</span>
            <span className="font-['DM_Sans'] font-medium text-[#f5f7fa] text-base leading-[1.5]">{period}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-[10px] items-start py-1">
              <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3c8a0e00} fill="#F78C69" />
              </svg>
              <p className="font-['DM_Sans'] font-medium text-[#f5f7fa] text-[12.8px] leading-[1.5]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <button className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors h-12 px-4 py-2 rounded-lg w-full">
          <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

function EnterpriseCard() {
  const features = [
    "Dedicated onboarding and engineering support",
    "Uptime guarantees",
    "Team directory integrations",
    "Priority Discord & Telegram account support",
    "Dedicated database",
  ];

  return (
    <div className="flex flex-col gap-[25px] h-full">
      <div className="backdrop-blur-[12.5px] bg-[#131a20] border border-[#3e4c59] rounded-lg p-6 flex-1">
        <div className="flex flex-col gap-2 mb-6">
          <h3 className="font-['DM_Sans'] font-bold text-[#f46739] text-xl">Custom</h3>
          <p className="font-['DM_Sans'] font-medium text-[#9aa5b1] text-sm leading-[1.5]">
            Get a tailored experience for your team.
          </p>
        </div>
        <p className="font-['DM_Sans'] font-medium text-[#e4e7eb] text-[12.8px] leading-[1.5] mb-4 italic">
          PRO plan features, plus:
        </p>
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-[10px] items-start py-1">
              <svg className="w-4 h-4 flex-shrink-0 mt-1" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p3c8a0e00} fill="#F78C69" />
              </svg>
              <p className="font-['DM_Sans'] font-medium text-[#f5f7fa] text-[12.8px] leading-[1.5]">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <a
          href="https://meetwith.xyz/sinachpat"
          className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors h-12 px-4 py-2 rounded-lg w-full flex items-center justify-center"
        >
          <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">Talk to sales</span>
        </a>
      </div>
    </div>
  );
}

function PricingSection() {
  const freeFeatures = [
    "Personal scheduling page",
    "1 Meeting type - FREE meetings",
    "Custom availability settings",
    // "Custom account handle",
    "Join unlimited number of groups",
    "Single integration with Google calendar, iCloud, Office 365 or WebDAV",
    // "Fixed booking link with wallet address",
    "Limited QuickPolls (max. 1 active poll per month)",
    "Basic calendar sync - 1 calendar sync only",
    "Smart notifications - Email, Discord & Telegram add the cadence for each meeting type",
    "Unlimited contact connection but no schedule allowed",
    "Email support"
  ];

  const proFeatures = [
    "Everything in Free plus (+):",
    "Unlimited scheduling groups - create, join, schedule groups without limits",
    "Payments & Invoicing",
    "Unlimited integrations (Google calendar, iCloud, Office 365 and WebDAV)",
    "Unlimited QuickPolls",
    "Unlimited meeting types - Free & Paid",
    "24/7 priority support"
  ];

  return (
    <section id="plans" className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-16 md:py-24">
      <div className="max-w-[1152px] mx-auto w-full">
        <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-10">
          Plans that meet your needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-stretch">
          <PricingCard
            title="Free"
            price="$0"
            period="/ forever"
            features={freeFeatures}
            buttonText="Get started"
          />
          <PricingCard
            title="Pro"
            price="$8"
            period="/ month"
            features={proFeatures}
            buttonText="Try it for Free"
            isPro
          />
          <EnterpriseCard />
        </div>
        <p className="font-['DM_Sans'] font-medium text-[#e4e7eb] text-xl md:text-2xl leading-[1.2] text-center max-w-[862px] mx-auto">
          Start for free, go Pro. You can try our Pro features using the 14-days free trial.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative w-full overflow-hidden px-4 md:px-8 lg:px-[131px] py-16 md:py-24">
      <GridBackground />
      <div className="relative max-w-[1152px] mx-auto w-full">
        <h2 className="font-['DM_Sans'] font-bold text-white text-3xl md:text-4xl lg:text-[48.83px] leading-[1.2] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-4">
          {landingFaqs.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-[12.5px] bg-[#131a20] border border-[#3e4c59] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(245,247,250,0.02)] transition-colors"
              >
                <h3 className="font-['DM_Sans'] font-bold text-white text-lg md:text-xl leading-[1.4] pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 flex-shrink-0 text-[#f46739] transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="font-['DM_Sans'] font-medium text-[#e4e7eb] text-base leading-[1.5]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-start">
          <Link
            to="/faqs"
            className="bg-[#f46739] hover:bg-[#d93f0c] transition-colors inline-flex h-12 items-center justify-center rounded-lg px-5 py-2"
          >
            <span className="font-['DM_Sans'] font-bold text-[#f5f7fa] text-base">See all FAQs</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#131a20] px-4 md:px-8 lg:px-10 py-6 border-t border-[#323f4b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <LogoV />
          <p className="font-['DM_Sans'] font-medium text-white text-[12.8px]">
            © Some rights reserved, maybe...
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
          <div className="flex gap-3">
            <a href="#plans" className="px-4 py-2 font-['DM_Sans'] font-medium text-white text-base hover:text-[#f46739] transition-colors">
              Plans
            </a>
            <Link to="/faqs" className="px-4 py-2 font-['DM_Sans'] font-medium text-white text-base hover:text-[#f46739] transition-colors">
              FAQ
            </Link>
            <a href="#changelog" className="px-4 py-2 font-['DM_Sans'] font-medium text-white text-base hover:text-[#f46739] transition-colors">
              Changelog
            </a>
            <a href="#feature-request" className="px-4 py-2 font-['DM_Sans'] font-medium text-white text-base hover:text-[#f46739] transition-colors">
              Feature Request
            </a>
          </div>
          <div className="flex gap-3">
            <button className="w-10 h-10 bg-[rgba(245,247,250,0.05)] hover:bg-[rgba(245,247,250,0.1)] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 40 40">
                <path d={svgPaths.p8682600} fill="white" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-[rgba(245,247,250,0.05)] hover:bg-[rgba(245,247,250,0.1)] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 40 40">
                <path d={svgPaths.p20256500} fill="#F5F7FA" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-[rgba(245,247,250,0.05)] hover:bg-[rgba(245,247,250,0.1)] transition-colors flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 40 39">
                <path d={svgPaths.p2baa5500} fill="#F5F7FA" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <a href="#terms" className="p-2 font-['DM_Sans'] font-medium text-white text-[12.8px] hover:text-[#f46739] transition-colors">
            Terms of Service
          </a>
          <a href="#privacy" className="p-2 font-['DM_Sans'] font-medium text-white text-[12.8px] hover:text-[#f46739] transition-colors">
            Privacy Policy
          </a>
          <a href="#data" className="p-2 font-['DM_Sans'] font-medium text-white text-[12.8px] hover:text-[#f46739] transition-colors">
            Data Protection
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-[#131a20] min-h-screen relative overflow-x-hidden w-full">
      <Header />
      <main className="w-full overflow-x-hidden">
        <HeroSection />
        <ImageShowcase />
        <HighlightedBox />
        <ProblemSection />
        <HowItWorksSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
