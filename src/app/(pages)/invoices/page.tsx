"use client";
import Divider from "@/app/components/Divider";
import { useRef, useState } from "react";
import { CgSearch } from "react-icons/cg";
import { RiLoader4Line } from "react-icons/ri";
import { waLink } from "@/lib/site";

export default function Invoices() {
  const [invoice, setInvoice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (invoice) {
      setLoading(true);
      // Orders are tracked via Mox Store support on WhatsApp.
      window.open(
        waLink(
          `Hello Mox Store, I want to check my order status.\nInvoice number: ${invoice}`
        ),
        "_blank",
        "noopener,noreferrer"
      );
      setLoading(false);
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto px-4 py-12 space-y-5 xl:max-w-7xl justify-center items-center"
      >
        <div className="flex flex-col w-full gap-y-3">
          <h1 className="font-bold text-3xl sm:text-4xl">Find your order!</h1>
          <p>
            Track your order by entering your invoice number below and our
            team will help you on WhatsApp:
          </p>
        </div>
        <div className="flex flex-col w-full gap-y-2">
          <h1 className="font-medium text-xs">Your Invoice Number</h1>
          <input
            type="text"
            onChange={(e) => setInvoice(e.target.value)}
            value={invoice}
            maxLength={20}
            id="invoice"
            name="invoice"
            ref={inputRef}
            placeholder="MXXXXXXXXXXXXXXXX"
            className=" max-w-[576px] px-3 py-2 placeholder-white text-xs text-white bg-[#535353] rounded-md"
          />
        </div>
        <div className="w-full flex justify-start font-medium text-sm">
          <button
            type="submit"
            className="flex items-center gap-2 pl-3 pr-4 py-2 bg-[#E30613] hover:bg-[#C40000] active:scale-95 rounded-lg transition-all duration-300 "
          >
            {loading ? (
              <div className="flex justify-center items-center w-[114.325px]">
                <RiLoader4Line className="h-5 w-5 animate-spin" />
              </div>
            ) : (
              <>
                <CgSearch className="h-5 w-5" />
                <h1>Track Order</h1>
              </>
            )}
          </button>
        </div>
      </form>
      <Divider />
    </>
  );
}
