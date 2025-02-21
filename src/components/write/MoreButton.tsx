'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { EllipsisIcon } from '@/atoms/icons';

const MoreButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none text-stone-300 hover:text-stone-800">
        <EllipsisIcon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="w-[216px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade py-5 px-5 z-20"
          sideOffset={5}
        >
          <DropdownMenu.Item className="outline-none w-full grid gap-y-1">
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Add to publication
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Share draft link
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Share to X
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Manage unlisted setting
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Change featured image
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Change display title / subtitle
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              Change topics
            </button>
            <button
              disabled
              className="w-full text-start text-sm text-stone-600 hover:text-stone-800 disabled:text-stone-300 py-1.5"
            >
              See revision history
            </button>
            <Link
              onClick={e => {
                e.preventDefault();
              }}
              className="w-full text-start text-sm text-stone-300 py-1.5"
              href="#/p/DRAFTTOKEN/settings"
            >
              More settings
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MoreButton;
