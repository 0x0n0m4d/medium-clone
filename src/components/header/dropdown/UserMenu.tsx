import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

interface Props {
  username: string;
  email: string;
}

const UserMenu = ({ email, username }: Props) => {
  return (
    <DropdownMenu.Content
      className="min-w-[264px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade mr-5 z-20"
      sideOffset={3}
    >
      <DropdownMenu.Item className="group relative flex flex-col leading-none outline-none h-[193px] border-b border-solid border-gray-100 items-center justify-center gap-y-5">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <Link
            href={`/${username}`}
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center text-start gap-x-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Profile"
            >
              <circle cx="12" cy="7" r="4.5" stroke="currentColor"></circle>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"
              ></path>
            </svg>
            Profile
          </Link>
          <Link
            href="/me/lists"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center text-start gap-x-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Lists"
            >
              <path
                stroke="currentColor"
                d="M6.44 6.69a1.5 1.5 0 0 1 1.06-.44h9a1.5 1.5 0 0 1 1.06.44l.354-.354-.353.353A1.5 1.5 0 0 1 18 7.75v14l-5.694-4.396-.306-.236-.306.236L6 21.75v-14c0-.398.158-.78.44-1.06Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5"
              ></path>
            </svg>
            Library
          </Link>
          <Link
            href="/me/stories/drafts"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center text-start gap-x-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Stories"
            >
              <path
                stroke="currentColor"
                d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                d="M8 8.5h8M8 15.5h5M8 12h8"
              ></path>
            </svg>
            Stories
          </Link>
          <Link
            href="/me/stats"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center text-start gap-x-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              aria-label="Stats"
            >
              <path
                stroke="currentColor"
                d="M2.75 19h4.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25ZM9.75 19h4.5a.25.25 0 0 0 .25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25ZM16.75 19h4.5a.25.25 0 0 0 .25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25Z"
              ></path>
            </svg>
            Stats
          </Link>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item className="group relative flex h-[165px] select-none items-center justify-center leading-none outline-none border-b border-solid border-gray-100">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <Link
            href="/me/settings"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Settings
          </Link>
          <Link
            href="/me/following"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Refine recommendations
          </Link>
          <Link
            href="/me/settings/publishing#managePublications"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Manage publications
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Help
          </Link>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item className="group relative flex h-[197px] select-none items-center justify-center leading-none outline-none border-b border-solid border-gray-100">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <Link
            href="/plans"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full flex items-center justify-between text-start"
          >
            Become a Medium member
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 64 64"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="#FFC017"
                d="m39.637 40.831-5.771 15.871a1.99 1.99 0 0 1-3.732 0l-5.771-15.87a2.02 2.02 0 0 0-1.194-1.195L7.298 33.866a1.99 1.99 0 0 1 0-3.732l15.87-5.771a2.02 2.02 0 0 0 1.195-1.194l5.771-15.871a1.99 1.99 0 0 1 3.732 0l5.771 15.87a2.02 2.02 0 0 0 1.194 1.195l15.871 5.771a1.99 1.99 0 0 1 0 3.732l-15.87 5.771a2.02 2.02 0 0 0-1.195 1.194"
              ></path>
            </svg>
          </Link>
          <Link
            href="/mastodon"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Create a Mastodon account
          </Link>
          <Link
            href="/verified-authors"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Apply for author verification
          </Link>
          <Link
            href="/partner-program"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Apply for the Partner Program
          </Link>
          <Link
            href="/gift"
            target="_blank"
            className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start"
          >
            Gift a membership
          </Link>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item className="group relative flex select-none items-center justify-center leading-none outline-none">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <button className="text-sm bg-transparent text-black/60 hover:text-black/90 w-full block items-center text-start">
            Sign out <br />
            {email}
          </button>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
};

export default UserMenu;
