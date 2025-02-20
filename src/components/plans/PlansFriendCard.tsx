import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, SparkleIcon } from '@/atoms/icons';

interface Props {
  avatar: string;
  name: string;
  isAnnuallySelected: boolean;
}

const PlansFriendCard = ({ avatar, name, isAnnuallySelected }: Props) => {
  return (
    <div className="flex flex-col w-full items-center border border-solid border-stone-200 rounded-lg py-10 sm:h-[686px] sm:max-h-[686px] sm:max-w-[328px]">
      <div className="flex flex-col w-full items-center gap-y-9">
        <div className="relative flex">
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="absolute -top-4 -right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 64 64"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <g clipPath="url(#clip0_5852_33342)">
                <path
                  fill="#fff"
                  stroke="#fff"
                  strokeWidth="4"
                  d="m57.908 39.696.006-.007.006-.007.147-.153C59.6 37.93 62 35.427 62 32s-2.399-5.93-3.933-7.53l-.147-.152-.006-.007-.007-.007a27 27 0 0 1-1.286-1.386c-.391-.464-.548-.732-.585-.826-.052-.132-.122-.437-.168-.994a30 30 0 0 1-.068-1.802l-.002-.165c-.022-2.272-.055-5.817-2.584-8.345s-6.073-2.562-8.345-2.584l-.165-.002-.468-.007c-.502-.008-.928-.014-1.334-.044-.534-.039-.811-.107-.94-.162-.163-.07-.458-.256-.9-.628a26 26 0 0 1-1.366-1.266l-.007-.007-.007-.006-.153-.147C37.93 4.4 35.427 2 32 2s-5.93 2.399-7.53 3.933l-.152.147-.007.006-.007.007c-.49.478-.955.924-1.386 1.286-.464.391-.732.548-.826.585-.132.052-.437.122-.994.168a30 30 0 0 1-1.802.068l-.165.002c-2.272.022-5.817.055-8.345 2.584s-2.562 6.073-2.584 8.345l-.002.165-.007.468c-.008.502-.014.928-.044 1.334-.039.534-.107.811-.162.94-.07.163-.256.458-.628.9-.356.425-.788.876-1.266 1.366l-.007.007-.006.007-.147.152C4.4 26.07 2 28.574 2 32s2.399 5.93 3.933 7.53l.147.152.006.007.007.007c.478.49.924.955 1.286 1.386.391.464.548.732.585.826.052.132.122.437.168.994.043.529.055 1.128.068 1.802l.002.165c.022 2.272.055 5.817 2.584 8.345s6.073 2.563 8.345 2.584l.165.002.468.007c.502.008.928.014 1.334.044.534.039.811.108.94.162.163.07.458.256.9.628.425.356.876.788 1.366 1.267l.007.006.007.006.152.147C26.07 59.6 28.574 62 32 62s5.93-2.399 7.53-3.933l.152-.147.007-.006.007-.007c.49-.478.955-.924 1.386-1.286.464-.391.732-.548.826-.585.132-.052.437-.122.994-.168a30 30 0 0 1 1.967-.07c2.272-.022 5.817-.055 8.345-2.584s2.563-6.073 2.584-8.345l.002-.165.007-.468c.008-.502.014-.928.044-1.334.039-.534.108-.811.162-.94.07-.163.256-.458.628-.9.356-.424.788-.876 1.267-1.366Z"
                ></path>
                <path
                  fill="#FFC017"
                  fillRule="evenodd"
                  d="M56.475 38.3C58.125 36.575 60 34.6 60 32s-1.875-4.575-3.525-6.3c-.95-.975-1.975-2.05-2.3-2.875-.325-.824-.35-2.17-.375-3.494v-.006c-.025-2.425-.075-5.2-2-7.125s-4.7-1.975-7.125-2l-.431-.007c-1.172-.017-2.29-.034-3.069-.368-.875-.375-1.9-1.35-2.875-2.3C36.575 5.875 34.6 4 32 4s-4.575 1.875-6.3 3.525c-.975.95-2.05 1.975-2.875 2.3-.824.325-2.17.35-3.494.375h-.006c-2.425.025-5.2.075-7.125 2s-1.975 4.7-2 7.125l-.007.431c-.017 1.172-.034 2.29-.368 3.069-.375.875-1.35 1.9-2.3 2.875C5.875 27.425 4 29.4 4 32s1.875 4.575 3.525 6.3c.95.975 1.975 2.05 2.3 2.875.325.824.35 2.17.375 3.494v.006c.025 2.425.075 5.2 2 7.125s4.7 1.975 7.125 2l.431.007c1.172.017 2.29.034 3.069.368.875.375 1.9 1.35 2.875 2.3C27.425 58.125 29.4 60 32 60s4.575-1.875 6.3-3.525c.975-.95 2.05-1.975 2.875-2.3.824-.325 2.17-.35 3.494-.375h.006c2.425-.025 5.2-.075 7.125-2s1.975-4.7 2-7.125l.007-.431c.017-1.172.034-2.29.368-3.069.375-.875 1.35-1.9 2.3-2.875m-23.36 6.846a1.92 1.92 0 0 1-2.226 0h-.003C27.574 42.8 18.006 35.762 18 28.909s6.503-10.252 13.259-4.45c.43.37 1.052.37 1.482 0 6.755-5.805 13.265-2.403 13.259 4.45-.006 6.56-9.574 13.892-12.886 16.237"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_5852_33342">
                  <path fill="#fff" d="M0 0h64v64H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-md text-center">Friend</h2>
          <p className="flex itmes-center text-base">
            {isAnnuallySelected ? (
              <>
                <span className="text-stone-500 line-through">$180</span>
                &nbsp;$150 USD/year
              </>
            ) : (
              <>$15 USD/month</>
            )}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center px-12 gap-y-10">
          <span className="text-center text-xs text-stone-500">
            Contribute more to writers and strengthen your support for the
            Medium community.
            <br /> Cancel anytime.
          </span>
          <Link
            href="#"
            className="w-full py-3.5 bg-primary hover:bg-phover text-sm text-white text-center rounded-full"
          >
            Select
          </Link>
        </div>
      </div>
      <div className="w-full grid px-10 mt-20 gap-y-7 sm:gap-y-6">
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <SparkleIcon />
          </span>{' '}
          All Medium member benefits
        </p>
        <span className="w-full flex items-center text-xs gap-x-3">
          <span className="bg-stone-200 w-full min-h-px" />
          PLUS
          <span className="bg-stone-200 w-full min-h-px" />
        </span>
        <p className="flex items-center font-bold text-start text-base text-stone-800 gap-x-5">
          <span className="text-primary font-normal">
            <CheckIcon />
          </span>{' '}
          Give 4x more to the writers you read
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Share member-only stories with anyone and drive more earnings for
          writers
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Customize app icon
        </p>
      </div>
    </div>
  );
};

export default PlansFriendCard;
