import Link from 'next/link';
import SignInDialog from '../auth/SignInDialog';
import SignUpDialog from '../auth/SignUpDialog';
import Logo from '../Logo';
import OpenModalButton from '../modals/OpenModalButton';
import AvatarButton from './AvatarButton';
import SearchBar from './SearchBar';

const Nav = () => {
  return (
    <nav className="bg-white fixed w-full z-10 px-6 lg:px-10">
      <div className="flex flex-col items-center text-xs">
        <div className="lg:hidden flex justify-between items-center w-full flex-grow min-h-[41px] border-b border-solid border-gray-100">
          <Link
            href="/membership"
            className="serif text-black/50 hover:text-black/90 h-full flex items-center justify-center gap-x-3"
          >
            Open in app
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="currentColor"
                d="M.985 8.485a.375.375 0 1 0 .53.53zM8.75 1.25h.375A.375.375 0 0 0 8.75.875zM8.375 6.5a.375.375 0 1 0 .75 0zM3.5.875a.375.375 0 1 0 0 .75zm-1.985 8.14 7.5-7.5-.53-.53-7.5 7.5zm6.86-7.765V6.5h.75V1.25zM3.5 1.625h5.25v-.75H3.5z"
              ></path>
            </svg>
          </Link>
          <div className="flex items-center gap-x-4">
            <OpenModalButton
              className="py-0.5 px-3 bg-primary hover:bg-phover text-white rounded-full"
              element={<SignUpDialog />}
            >
              Sign up
            </OpenModalButton>
            <OpenModalButton
              className="py-0.5 px-3 text-black/50 hover:text-black/90"
              element={<SignInDialog />}
            >
              Sign in
            </OpenModalButton>
          </div>
        </div>
        <div className="flex justify-between w-full flex-grow items-center min-h-[57px] border-b border-solid border-gray-100">
          <div className="flex items-center gap-x-5">
            <Link href="/" aria-label="logo">
              <Logo />
            </Link>
            <div className="hidden xs:flex">
              <SearchBar />
            </div>
          </div>
          <div className="flex outline-none text-black/90 text-sm items-center gap-x-5">
            <Link
              href="/search"
              className="flex xs:hidden mr-3 text-black/50 hover:text-black/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
            <OpenModalButton
              className="hidden sm:flex items-center py-2.5 px-5 text-black/50 hover:text-black/90 gap-x-3"
              element={<SignInDialog redirectUrl="/new-story" />}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Write"
              >
                <path
                  fill="currentColor"
                  d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                ></path>
                <path
                  stroke="currentColor"
                  d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                ></path>
              </svg>
              Write
            </OpenModalButton>
            <OpenModalButton
              className="hidden lg:flex py-2.5 px-5 bg-primary hover:bg-phover text-white rounded-full"
              element={<SignUpDialog />}
            >
              Sign up
            </OpenModalButton>
            <OpenModalButton
              className="hidden lg:flex py-2.5 px-5 text-black/50 hover:text-black/90"
              element={<SignInDialog />}
            >
              Sign in
            </OpenModalButton>
            <AvatarButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
