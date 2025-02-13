import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { SparkleIcon } from '@/atoms/icons';
import SignInDialog from '@/components/auth/SignInDialog';
import SignUpDialog from '@/components/auth/SignUpDialog';
import OpenModalButton from '@/components/modals/OpenModalButton';

const Menu = () => {
  return (
    <DropdownMenu.Content
      className="min-w-[264px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade mr-5 z-20"
      sideOffset={3}
    >
      <DropdownMenu.Item className="group relative flex flex-col leading-none outline-none h-[182px] border-b border-solid border-gray-100 items-center justify-center gap-y-5">
        <h2 className="font-bold text-base">Get started on Medium</h2>
        <OpenModalButton
          element={<SignUpDialog />}
          className="text-sm text-white bg-primary hover:bg-phover rounded-full py-3 w-full max-w-[216px] block items-center text-center mt-5"
        >
          Sign up
        </OpenModalButton>
        <OpenModalButton
          element={<SignInDialog />}
          className="text-sm bg-transparent text-black/85 hover:text-black border border-solid border-black/90 rounded-full py-3 w-full max-w-[216px] block items-center text-center"
        >
          Sign in
        </OpenModalButton>
      </DropdownMenu.Item>
      <DropdownMenu.Item className="group relative flex h-[197px] select-none items-center justify-center leading-none outline-none">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <OpenModalButton
            element={<SignUpDialog redirectUrl="/plans" />}
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center justify-between text-start"
          >
            Become a Medium member
            <SparkleIcon />
          </OpenModalButton>
          <OpenModalButton
            element={<SignUpDialog redirectUrl="/mastodon" />}
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Create a Mastodon account
          </OpenModalButton>
          <OpenModalButton
            element={<SignUpDialog redirectUrl="/verified-authors" />}
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Apply for author verification
          </OpenModalButton>
          <OpenModalButton
            element={<SignUpDialog redirectUrl="/partner-program" />}
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Apply for the Partner Program
          </OpenModalButton>
          <Link
            href="/gift"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Gift a membership
          </Link>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
};

export default Menu;
