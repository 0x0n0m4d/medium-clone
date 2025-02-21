import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';

const AvatarButton = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="outline-none w-[32px] h-[32px]">
        <Image
          src="/assets/default-avatar.png"
          alt="User Avatar"
          width={32}
          height={32}
          className="rounded-full min-w-[32px] h-[32px]"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-[230px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade z-20"
        sideOffset={5}
      >
        <DropdownMenu.Item className="outline-none w-full flex border-b border-solid border-stone-200 py-10 px-8 gap-x-6">
          <Image
            src="/assets/default-avatar.png"
            alt="User Avatar"
            width={50}
            height={50}
            className="rounded-full min-w-[50px] h-[50px]"
          />
          <div className="flex flex-col gap-y-1">
            <Link href="#user" className="text-sm font-bold">
              Name
            </Link>
            <Link href="#user" className="text-sm text-stone-500">
              @Username
            </Link>
          </div>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="outline-none w-full flex border-b border-solid border-stone-200 py-8 px-8">
          <Link
            href="/new-story"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Write
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="outline-none w-full flex flex-col border-b border-solid border-stone-200 py-8 px-8 gap-y-5">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Profile
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Library
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Stories
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Stats
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="outline-none w-full flex flex-col border-b border-solid border-stone-200 py-8 px-8 gap-y-5">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Settings
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Refine recommendations
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Manage publications
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Help
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="outline-none w-full flex flex-col border-b border-solid border-stone-200 py-8 px-8 gap-y-5">
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-800"
          >
            Apply to the Partner Program
          </Link>
          <Link href="/" className="text-sm text-primary hover:text-stone-800">
            Become a member
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="outline-none w-full flex border-b border-solid border-stone-200 py-8 px-8 gap-y-5">
          <button className="text-sm text-stone-500 hover:text-stone-800">
            Sign out
          </button>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AvatarButton;
