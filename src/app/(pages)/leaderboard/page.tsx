"use client";
import Divider from "@/app/components/Divider";

interface List {
  fullname: string;
  id: number;
  total: number;
  totalAmount: number;
  username: string;
}

// Static leaderboard data (orders are verified by Mox Store support).
const listToday: List[] = [
  { fullname: "Ahmed M.", id: 1, total: 14, totalAmount: 6850, username: "ahmed_m" },
  { fullname: "Omar K.", id: 2, total: 11, totalAmount: 5420, username: "omar_k" },
  { fullname: "Youssef R.", id: 3, total: 9, totalAmount: 4180, username: "youssef_r" },
  { fullname: "Karim S.", id: 4, total: 7, totalAmount: 3260, username: "karim_s" },
  { fullname: "Mariam H.", id: 5, total: 6, totalAmount: 2890, username: "mariam_h" },
  { fullname: "Tarek A.", id: 6, total: 5, totalAmount: 2340, username: "tarek_a" },
  { fullname: "Nour E.", id: 7, total: 5, totalAmount: 1980, username: "nour_e" },
  { fullname: "Hana Z.", id: 8, total: 4, totalAmount: 1650, username: "hana_z" },
  { fullname: "Sami F.", id: 9, total: 4, totalAmount: 1420, username: "sami_f" },
  { fullname: "Laila W.", id: 10, total: 3, totalAmount: 1180, username: "laila_w" },
];

const listWeek: List[] = [
  { fullname: "Omar K.", id: 1, total: 63, totalAmount: 31250, username: "omar_k" },
  { fullname: "Ahmed M.", id: 2, total: 57, totalAmount: 29400, username: "ahmed_m" },
  { fullname: "Youssef R.", id: 3, total: 44, totalAmount: 22600, username: "youssef_r" },
  { fullname: "Mariam H.", id: 4, total: 38, totalAmount: 18720, username: "mariam_h" },
  { fullname: "Karim S.", id: 5, total: 33, totalAmount: 16480, username: "karim_s" },
  { fullname: "Tarek A.", id: 6, total: 29, totalAmount: 14650, username: "tarek_a" },
  { fullname: "Nour E.", id: 7, total: 24, totalAmount: 12300, username: "nour_e" },
  { fullname: "Sami F.", id: 8, total: 21, totalAmount: 10980, username: "sami_f" },
  { fullname: "Hana Z.", id: 9, total: 18, totalAmount: 9740, username: "hana_z" },
  { fullname: "Laila W.", id: 10, total: 16, totalAmount: 8260, username: "laila_w" },
];

const listMonth: List[] = [
  { fullname: "Ahmed M.", id: 1, total: 241, totalAmount: 118400, username: "ahmed_m" },
  { fullname: "Omar K.", id: 2, total: 228, totalAmount: 111250, username: "omar_k" },
  { fullname: "Youssef R.", id: 3, total: 186, totalAmount: 92300, username: "youssef_r" },
  { fullname: "Karim S.", id: 4, total: 154, totalAmount: 78120, username: "karim_s" },
  { fullname: "Mariam H.", id: 5, total: 141, totalAmount: 71600, username: "mariam_h" },
  { fullname: "Tarek A.", id: 6, total: 118, totalAmount: 60340, username: "tarek_a" },
  { fullname: "Nour E.", id: 7, total: 104, totalAmount: 52780, username: "nour_e" },
  { fullname: "Sami F.", id: 8, total: 92, totalAmount: 46420, username: "sami_f" },
  { fullname: "Hana Z.", id: 9, total: 81, totalAmount: 41960, username: "hana_z" },
  { fullname: "Laila W.", id: 10, total: 74, totalAmount: 37210, username: "laila_w" },
];

const MEDALS = ["🥇", "🥈", "🥉"];

export default function Leaderboard() {
  const listDataCard = [
    { title: "Today", state: listToday },
    { title: "This Week", state: listWeek },
    { title: "This Month", state: listMonth },
  ];

  return (
    <>
      <div className="container flex flex-col mx-auto px-4 pt-14 pb-12 gap-y-5 xl:max-w-7xl">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col text-center gap-y-2">
            <h1 className="font-outfit text-xs font-bold uppercase tracking-[0.14em] text-[#E30613]">
              Leaderboard
            </h1>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Top 10 Best-Selling Orders at Mox Store
            </h2>
            <p className="max-w-3xl mt-3 text-center text-sm leading-7 text-white/55">
              The 10 best-selling customers at Mox Store, updated regularly.
              Place more orders to climb the ranks.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 text-sm">
            {listDataCard?.map((d) => {
              return (
                <div
                  key={d.title}
                  className="w-full flex flex-col items-center mx-auto max-w-md lg:max-w-none"
                >
                  <div className="flex w-full">
                    <div className="px-4 py-1.5 ml-3 bg-[#242425] border border-white/10 border-b-0 text-xs font-semibold text-white/80 rounded-t">
                      Top 10 — {d.title}
                    </div>
                  </div>
                  <div className="w-full h-full p-6 bg-[#242425] rounded border border-white/10">
                    <ul className="space-y-3">
                      {d.state?.map((row, i) => {
                        return (
                          <li
                            key={i}
                            className="flex justify-between items-center"
                          >
                            <div className="flex items-center gap-2 text-white/85">
                              <span className="w-6 shrink-0 text-white/40">
                                {i + 1}.
                              </span>
                              <span>
                                {row.fullname} {MEDALS[i] ?? ""}
                              </span>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="font-semibold text-white">
                                {row.total} orders
                              </span>
                              <span className="text-[11px] text-white/40">
                                EGP {row.totalAmount.toLocaleString()}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}
