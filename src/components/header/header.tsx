"use client";
import Link from "next/link";

import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-stone-800 w-full px-8 py-4 flex items-center justify-between fixed z-1">
      <Link href="/" className="text-white text-3xl font-bold">
        Cocktails List
      </Link>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <Bars3Icon aria-hidden="true" className="size-6 text-white" />
        </button>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <Popover className="relative">
          <div className="flex gap-6 divide-x divide-gray-900/5">
            <Link href="/cocktails" className="text-xl font-bold text-white">
              Cocktails
            </Link>
            <Link
              href="/pick-cocktail"
              className="text-xl font-bold text-white"
            >
              Pick Random
            </Link>
          </div>
        </Popover>
      </PopoverGroup>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border-l border-white"
          style={{ background: "#171717" }}
        >
          <div className="flex items-center justify-between px-8 py-4 bg-stone-800">
            <Link href={"/"} className="text-white text-3xl font-bold">
              Cocktails List
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="flow-root px-8 py-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-2 py-6">
                <Link
                  href="/cocktails"
                  className="text-white text-xl font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cocktails
                </Link>
                <Link
                  href="/pick-cocktail"
                  className="text-white text-xl font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pick random cocktail
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
