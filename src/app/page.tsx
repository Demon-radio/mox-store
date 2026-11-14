import Hero from "./(home)/_components/Hero";
import GameRow from "./(home)/_components/GameRow";
import Services from "./(home)/_components/Services";
import Divider from "./components/Divider";
import {
  GAMES,
  POPULAR_GAMES,
  FLASH_GAMES,
} from "@/lib/games";

export default function Home() {
  const directTopUp = GAMES.filter((g) => g.category === "topup");
  const subscriptions = GAMES.filter((g) => g.category === "subs");
  const giftCards = GAMES.filter((g) => g.category === "gift");

  return (
    <main className="flex flex-col pb-16">
      <Hero />
      <div className="flex flex-col gap-y-10 pt-10">
        <GameRow
          title="Popular"
          games={POPULAR_GAMES}
          viewAllHref="/topup"
          viewAllLabel="View all products"
        />
        <GameRow
          title="Deals of the day"
          games={FLASH_GAMES}
          viewAllHref="/topup"
          viewAllLabel="View all deals"
        />
        <GameRow
          title="Direct top-up"
          games={directTopUp}
          viewAllHref="/topup"
          viewAllLabel="View all 13"
        />
        <GameRow
          title="Subscriptions"
          games={subscriptions}
          viewAllHref="/topup"
          viewAllLabel="View all"
        />
        <GameRow
          title="Gift cards"
          games={giftCards}
          viewAllHref="/topup"
          viewAllLabel="View all"
        />
        <Services />
        <Divider />
      </div>
    </main>
  );
}
