"use client";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi2";
import { AiFillSignal } from "react-icons/ai";
import { CgSearch } from "react-icons/cg";
import { MdOutlineGridView } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import MoxLogo from "./MoxLogo";
import GameIcon from "./GameIcon";
import { waLink } from "@/lib/site";
import { GAMES, POPULAR_GAMES, topupLink } from "@/lib/games";

const navbarMenu = [
  {
    title: "Home",
    href: "/",
    component: <HiOutlineHome className="h-4 w-4" />,
  },
  {
    title: "Top-Up",
    href: "/topup",
    component: <IoGameController className="h-4 w-4" />,
  },
  {
    title: "Services",
    href: "/#services",
    component: <MdOutlineGridView className="h-4 w-4" />,
  },
  {
    title: "Track Order",
    href: "/invoices",
    component: <CgSearch className="h-4 w-4" />,
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    component: <AiFillSignal className="h-4 w-4" />,
  },
];

function SearchIcon() {
  return <CgSearch className="h-5 w-5" />;
}

const SearchIconModal: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      ></path>
    </svg>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!openModal) {
      setSearch("");
    }
  }, [openModal]);

  const open = () => {
    setOpenModal(!openModal);
  };

  const close = () => {
    setOpenModal(false);
  };

  const filteredProducts =
    GAMES.filter((g) =>
      g.name.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full flex-none font-plex font-semibold text-sm bg-[#1C1C1D]/90 border-b border-white/[0.08] backdrop-blur text-[#E5E7EB]">
        <div className="container mx-auto px-4 xl:max-w-7xl">
          <div className="flex h-[60px] justify-between items-center">
            <div className="flex items-center">
              <Menu>
                <MenuButton className="p-2 lg:hidden active:scale-90 transition-all duration-300 ease-out">
                  {" "}
                  <HiBars3 className="h-6 w-6" />
                </MenuButton>
                <MenuItems
                  transition
                  modal={false}
                  anchor="bottom"
                  className="fixed w-[190px] mt-2 ml-2 z-10 rounded border border-white/10 bg-[#242425] p-1 text-sm/6 text-white transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                  {navbarMenu.map((d) => {
                    return (
                      <MenuItem key={d.title}>
                        <Link
                          href={d.href}
                          className={`${
                            pathname === d.href ? "bg-white/10" : ""
                          } group flex w-full items-center gap-2 rounded py-1.5 px-3 data-[focus]:bg-white/10`}
                        >
                          {d.title}
                        </Link>
                      </MenuItem>
                    );
                  })}
                  <div className="my-1 h-px bg-white/10" />
                  <MenuItem>
                    <Link
                      href={waLink("Hello Mox Store, I would like to place an order.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-full items-center gap-2 rounded py-1.5 px-3 data-[focus]:bg-white/10"
                    >
                      <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
                      Order via WhatsApp
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
              <Link href={"/"} className="flex items-center gap-2 p-2">
                <MoxLogo className="h-9 w-9 sm:h-10 sm:w-10" />
                <span className="hidden xs:flex flex-col leading-none select-none">
                  <span className="font-outfit text-lg font-black tracking-[0.12em] text-white">
                    MO<span className="text-[#E30613]">X</span>
                  </span>
                  <span className="mt-0.5 text-[9px] font-bold tracking-[0.4em] text-white/60">
                    STORE
                  </span>
                </span>
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:block lg:self-stretch">
              <div className="flex h-full items-stretch gap-x-1">
                {navbarMenu?.map((d, i) => {
                  return (
                    <Link
                      key={i}
                      href={d.href}
                      className={`${
                        pathname === d.href
                          ? "text-white"
                          : "text-white/70 hover:text-white"
                      } relative flex items-center gap-x-1.5 px-3 text-[13px] font-medium transition-colors duration-150`}
                    >
                      {d.component}
                      <h1>{d.title}</h1>
                      {pathname === d.href && (
                        <span className="absolute inset-x-3 bottom-0 h-0.5 bg-[#E30613]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-grow justify-end">
              <button
                onClick={open}
                aria-label="Search"
                className="flex justify-center items-center h-9 w-9 rounded border border-white/10 bg-transparent hover:border-white/30 transition-colors"
              >
                <SearchIcon />
              </button>
              <Link
                href={waLink("Hello Mox Store, I would like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex justify-center items-center h-9 px-4 gap-x-2 rounded bg-[#E30613] hover:bg-[#C40000] font-bold transition-colors"
              >
                <FaWhatsapp className="h-4 w-4" />
                <h1>Order Now</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        open={openModal}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-[60] w-screen bg-black/60 backdrop-blur-[2px]">
          <div className="flex justify-center px-4 pt-[79px]">
            <DialogPanel
              transition
              className="w-full flex flex-col max-w-2xl mx-auto rounded border border-white/10 bg-[#242425] duration-300 ease-out data-[closed]:transform-[scale(97%)] data-[closed]:opacity-0 overflow-hidden"
            >
              <div className="flex items-center border-b border-white/10">
                <div className="pl-4 pr-2 text-white/50">
                  <SearchIconModal />
                </div>
                <input
                  placeholder="Search products…"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className="h-12 w-full py-2 text-white placeholder:text-white/40 bg-[#242425] sm:text-sm focus:outline-none"
                />
              </div>
              <div className="max-h-80 flex flex-col p-2 overflow-y-auto">
                {filteredProducts.length !== 0 ? (
                  <h1 className="px-3 pt-3 text-[10px] font-bold uppercase tracking-wider text-white/40">
                    {search !== "" ? "Results" : "Popular"}
                  </h1>
                ) : null}
                {search !== "" && filteredProducts.length === 0 ? (
                  <div className="flex items-center justify-center px-6 py-14 sm:px-14 text-sm text-white/60">
                    {`We couldn't find any products with that term. Please try again.`}
                  </div>
                ) : (
                  <ul className="pt-1">
                    {(search === "" ? POPULAR_GAMES : filteredProducts).map(
                      (g) => {
                        return (
                          <Link key={g.slug} href={topupLink(g.slug)}>
                            <li className="flex items-center px-3 py-2 space-x-3 text-sm hover:bg-white/[0.06] rounded transition-colors">
                              <div className="w-16 h-16 rounded bg-[#1C1C1D] border border-white/10 p-2 shrink-0">
                                <GameIcon image={g.image} name={g.name} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white">{g.name}</span>
                                <span className="text-[10px] text-white/50">
                                  {g.publisher} • {g.currency}
                                </span>
                              </div>
                            </li>
                          </Link>
                        );
                      }
                    )}
                  </ul>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
