"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./animate.module.css";
import { orderLink } from "@/lib/site";

interface PopularProducts {
  categoryName: string;
  code: string;
  handle: string;
  input: string[];
  isPopular: boolean;
  publisher: string;
  subtitle: string;
  thumbnail: string;
  title: string;
}

export default function Popular() {
  const [popularProducts, setPopularProducts] = useState<PopularProducts[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [failedThumbs, setFailedThumbs] = useState<Set<number>>(new Set());
  const mockData = ["", "", "", "", "", "", "", ""];

  const getPopular = async (): Promise<void> => {
    try {
      const res = await fetch("https://game-voucher-api.vercel.app/popular");

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const response = await res.json();
      setPopularProducts(response);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    if (error) {
      console.error("Error fetching popular:", error);
    }
  }, [error]);

  return (
    <div className="container flex flex-col mx-auto px-4 space-y-5 xl:max-w-7xl">
      <div className="flex flex-col">
        <h1 className="uppercase font-semibold text-lg leading-relaxed tracking-wider">
          🔥 Popular Now!
        </h1>
        <p className="pl-8 text-xs">
          The most popular products right now.
        </p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {popularProducts.length === 0
          ? mockData.map((d, i) => {
              return (
                <li key={i}>
                  <Link
                    href={`/`}
                    className="flex p-2 bg-gradient-to-br from-[#292929] to-[#292929] via-[#3B3B3B] rounded-2xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141414] hover:ring-[#E30613] transition-all duration-300 ease-in-out animate-pulse"
                  >
                    <div className="h-[56px] md:h-20">{d}</div>
                  </Link>
                </li>
              );
            })
          : popularProducts?.map((d, i) => {
              return (
                <li key={i}>
                  <Link
                    href={orderLink(d.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-full flex p-2 bg-top bg-custom-clamp bg-card-pattern bg-[#202020] rounded-2xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141414] hover:ring-[#E30613] transition-all duration-300 ease-in-out overflow-hidden`}
                  >
                    <div
                      className={`${styles.slideR} ${
                        styles[`delay-${i}`]
                      } flex justify-center items-center space-x-3`}
                    >
                      {failedThumbs.has(i) ? (
                        // Branded fallback tile when the CDN thumbnail is blocked (403)
                        <div className="h-14 w-14 md:h-20 md:w-20 shrink-0 rounded-[0.6rem] bg-gradient-to-br from-[#E30613] to-[#7A0000] ring-1 ring-[#141414] flex items-center justify-center">
                          <span className="text-xl md:text-2xl font-black text-white drop-shadow">
                            {d.title.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      ) : (
                        <Image
                          src={d.thumbnail}
                          alt={d.title}
                          height={56}
                          width={56}
                          unoptimized
                          onError={() =>
                            setFailedThumbs((prev) => new Set(prev).add(i))
                          }
                          className=" h-14 w-14 md:h-20 md:w-20 ring-1 ring-[#141414] rounded-[0.6rem]"
                        />
                      )}
                      <div className="flex flex-col justify-center">
                        <h1 className="font-semibold text-[0.625rem] md:text-[1rem]">
                          {d.title}
                        </h1>
                        <p className="text-[0.625rem] md:text-sm">
                          {d.publisher}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
