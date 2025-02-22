'use client';

import Image from 'next/image';
import { ArrowTopRight } from '@/atoms/icons';

interface Props {
  email: string;
  username: string;
  name: string;
  photoUrl: string;
}

const RightBar = ({ email, username, name, photoUrl }: Props) => {
  return (
    <div className="w-full min-w-[533px] max-w-[728px] h-full flex flex-col items-start justify-start">
      <div className="w-full flex flex-col items-start">
        <h1 className="text-[42px] font-bold">Settings</h1>
        <nav className="relative w-full flex items-center gap-x-14 border-b border-solid border-gray-100 mt-20">
          <div className="pb-5 font-bold text-sm text-center text-black border-b border-solid border-black">
            <button className="w-max">Account</button>
          </div>
          <div className="pb-5 font-bold text-sm text-center text-stone-500 hover:text-black">
            <button className="w-max">Publishing</button>
          </div>
          <div className="pb-5 font-bold text-sm text-center text-stone-500 hover:text-black">
            <button className="w-max">Notifications</button>
          </div>
          <div className="pb-5 font-bold text-sm text-center text-stone-500 hover:text-black">
            <button className="w-max">Membership and payment</button>
          </div>
          <div className="pb-5 font-bold text-sm text-center text-stone-500 hover:text-black">
            <button className="w-max">Security and apps</button>
          </div>
        </nav>
      </div>
      <div className="flex flex-col w-full gap-y-14 mt-20 border-b border-solid border-stone-200 pb-12">
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <span className="text-sm text-stone-800">Email address</span>
          <span className="text-sm">{email}</span>
        </button>
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <span className="text-sm text-stone-800">Username and subdomain</span>
          <span className="text-sm">{username}</span>
        </button>
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-stone-800">Profile information</span>
            <span className="text-xs text-stone-500">
              Edit your photo, name, pronouns, short bios, etc.
            </span>
          </div>
          <span className="text-sm flex items-center gap-x-3">
            {name}
            <Image
              src={photoUrl}
              alt="Username"
              width={24}
              height={24}
              className="w-[24px] h-[24px] rounded-full"
            />
          </span>
        </button>
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-stone-800">Profile design</span>
            <span className="text-xs text-stone-500">
              Customize the appearence of your profile.
            </span>
          </div>
          <span>
            <ArrowTopRight />
          </span>
        </button>
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-stone-800">Custom domain</span>
            <span className="text-start text-xs text-stone-500 pr-8">
              Upgrade to a Medium Membership to redirect your profile URL to a
              domain like yourdomain.com.
            </span>
          </div>
          <span className="text-sm flex items-center gap-x-3">
            None
            <ArrowTopRight />
          </span>
        </button>
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-stone-800">Partner Program</span>
            <span className="text-xs text-stone-500">
              You are not enrolled in the Partner Program.
            </span>
          </div>
          <span className="text-sm">
            <ArrowTopRight />
          </span>
        </button>
      </div>
      <div className="flex flex-col w-full gap-y-14 mt-12 border-b border-solid border-stone-200 pb-12">
        <button className="flex items-center justify-between w-full text-stone-500 hover:text-stone-800">
          <div className="flex items-start">
            <span className="text-sm text-stone-800">
              Muted writers and publications
            </span>
          </div>
          <span className="text-sm">
            <ArrowTopRight />
          </span>
        </button>
        <button className="flex items-center justify-start w-full text-stone-500 hover:text-stone-800">
          <div className="flex items-start">
            <span className="text-sm text-stone-800">Blocked users</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col w-full gap-y-14 mt-12 mb-20">
        <button className="flex items-center justify-start w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-red-500">Deactive account</span>
            <span className="text-xs text-stone-500">
              Deactiving will suspend your account until you sign back in.
            </span>
          </div>
        </button>
        <button className="flex items-center justify-start w-full text-stone-500 hover:text-stone-800">
          <div className="flex flex-col items-start gap-y-2">
            <span className="text-sm text-red-500">Delete account</span>
            <span className="text-xs text-stone-500">
              Permanently delete your account and all of your content.
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RightBar;
