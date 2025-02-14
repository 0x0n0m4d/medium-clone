'use client';

import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  BookmarkIcon,
  FillBookmarkIcon,
  FillNoteIcon,
  FillStatsIcon,
  NoteIcon,
  ProfileIcon,
  SparkleIcon,
  StatsIcon
} from '@/atoms/icons';
import { removeUserSessionData } from '@/redux/slices/userData.slice';
import { AppDispatch } from '@/redux/store';

interface Props {
  username: string;
  email: string;
}

const UserMenu = ({ email, username }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const [cookies, , removeCookie] = useCookies(['access_token']);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleLogout = async () => {
    try {
      const res = await dispatch(
        removeUserSessionData(cookies.access_token)
      ).then(res => {
        return res.payload;
      });

      if (!res) return false;

      return true;
    } catch (err) {
      console.log('[ERROR_LOGOUT]', err);
      return false;
    }
  };

  return (
    <DropdownMenu.Content
      className="min-w-[264px] rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade mr-5 z-20"
      sideOffset={3}
    >
      <DropdownMenu.Item className="group relative flex flex-col leading-none outline-none h-[193px] border-b border-solid border-gray-100 items-center justify-center gap-y-5">
        <div className="w-full h-full flex flex-col items-center justify-between p-10">
          <Link
            href={`/${username}`}
            className={`text-sm bg-transparent ${pathname === `/${username}` ? 'text-black' : 'text-black/60 hover:text-black/90'} w-full flex items-center text-start gap-x-5`}
          >
            <ProfileIcon />
            Profile
          </Link>
          <Link
            href="/me/lists"
            className={`text-sm bg-transparent ${pathname === '/me/lists' ? 'text-black' : 'text-black/60 hover:text-black/90'} w-full flex items-center text-start gap-x-5`}
          >
            {pathname === '/me/lists' ? <FillBookmarkIcon /> : <BookmarkIcon />}
            Library
          </Link>
          <Link
            href="/me/stories/drafts"
            className={`text-sm bg-transparent ${pathname === '/me/stories' ? 'text-black' : 'text-black/60 hover:text-black/90'} w-full flex items-center text-start gap-x-5`}
          >
            {pathname === '/me/stories' ? <FillNoteIcon /> : <NoteIcon />}
            Stories
          </Link>
          <Link
            href="/me/stats"
            className={`text-sm bg-transparent ${pathname === '/me/stats' ? 'text-black' : 'text-black/60 hover:text-black/90'} w-full flex items-center text-start gap-x-5`}
          >
            {pathname === '/me/stats' ? <FillStatsIcon /> : <StatsIcon />}
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
            <SparkleIcon />
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
          <button
            className="text-sm bg-transparent text-black/60 hover:text-black/90 disabled:text-black/45 w-full block items-center text-start leading-10"
            disabled={isPending}
            onClick={e => {
              e.preventDefault();
              setIsPending(true);

              handleLogout()
                .then(() => {
                  removeCookie('access_token', { path: '/', sameSite: 'lax' });
                })
                .finally(() => {
                  if (pathname === '/') {
                    router.refresh();
                  } else {
                    router.push('/');
                  }
                  setIsPending(false);
                });
            }}
          >
            Sign out <br />
            {email}
          </button>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  );
};

export default UserMenu;
