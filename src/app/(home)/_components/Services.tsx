"use client";
import { useState } from "react";
import {
  IoGameController,
  IoSparkles,
} from "react-icons/io5";
import {
  FaMoneyBillWave,
  FaBullhorn,
  FaUsers,
  FaMagic,
  FaWhatsapp,
} from "react-icons/fa";
import { MdApps, MdSubscriptions } from "react-icons/md";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { SERVICE_IMAGES } from "@/lib/service-images";
import { orderLink } from "@/lib/site";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  gaming: <IoGameController className="h-5 w-5" />,
  entertainment: <MdSubscriptions className="h-5 w-5" />,
  ai: <IoSparkles className="h-5 w-5" />,
  apps: <MdApps className="h-5 w-5" />,
  payments: <FaMoneyBillWave className="h-5 w-5" />,
  ads: <FaBullhorn className="h-5 w-5" />,
  social: <FaUsers className="h-5 w-5" />,
  custom: <FaMagic className="h-5 w-5" />,
};

export default function Services() {
  const [active] = useState<string>(SERVICE_CATEGORIES[0].id);
  const category =
    SERVICE_CATEGORIES.find((c) => c.id === active) ?? SERVICE_CATEGORIES[0];

  return (
    <section
      id="services"
      className="container flex flex-col mx-auto px-4 gap-y-5 xl:max-w-7xl scroll-mt-20"
    >
      {/* Heading */}
      <div className="flex flex-col gap-y-1">
        <h1 className="font-outfit text-xs font-bold uppercase tracking-[0.14em] text-white/90">
          Mox Store Services
        </h1>
        <p className="text-xs text-white/50 -mt-1 pl-0">{category.tagline}</p>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {category.items.map((item) => {
          const logo = SERVICE_IMAGES[item.name];
          return (
            <a
              key={item.name}
              href={orderLink(`${item.name}${item.subtitle ? ` (${item.subtitle})` : ""}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2 bg-[#242425] rounded border border-white/[0.08] p-4 hover:border-[#E30613]/60 transition-all duration-200"
            >
              {/* Service logo / branded tile */}
              <div className="relative flex h-28 w-full items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br from-[#262626] to-[#121212] ring-1 ring-white/5 mb-2">
                {logo && logo.endsWith(".svg") ? (
                  <img
                    src={logo}
                    alt={`${item.name} logo`}
                    loading="lazy"
                    className="h-16 w-16 object-contain drop-shadow transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                ) : logo ? (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1.5 shadow-[0_4px_14px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={logo}
                      alt={`${item.name} logo`}
                      loading="lazy"
                      className="h-full w-full object-contain"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>
                ) : (
                  <span className="select-none text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-[#FF5A4E] to-[#E30613]">
                    {item.name.charAt(0)}
                  </span>
                )}
              </div>
              
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <h2 className="font-semibold text-sm sm:text-[15px] leading-snug text-white">
                    {item.name}
                  </h2>
                  {item.subtitle && (
                    <p className="text-[11px] sm:text-xs text-white/55 mt-1">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                <span className="shrink-0 flex items-center justify-center h-9 w-9 rounded-xl bg-[#E30613]/15 text-[#FF4A3D] group-hover:bg-[#E30613] group-hover:text-white transition-all duration-300">
                  {CATEGORY_ICONS[category.id]}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#25D366] mt-auto pt-1">
                <FaWhatsapp className="h-4 w-4" />
                <span className="ml-auto text-white/35 font-normal group-hover:text-white/60 transition-colors">
                  Tap to order →
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}