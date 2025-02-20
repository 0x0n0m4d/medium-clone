import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon } from '@/atoms/icons';

interface Props {
  avatar: string;
  name: string;
  isAnnuallySelected: boolean;
}

const PlansMemberCard = ({ avatar, name, isAnnuallySelected }: Props) => {
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
              viewBox="0 0 40 40"
              role="presentation"
              aria-hidden="true"
              focusable="false"
            >
              <mask
                id="path-1-outside-1_5853_41067"
                width="38"
                height="38"
                x="1"
                y="1"
                fill="#000"
                maskUnits="userSpaceOnUse"
              >
                <path fill="#fff" d="M1 1h38v38H1z"></path>
                <path d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"></path>
              </mask>
              <path
                fill="#FFC017"
                d="m24.7 25.435-3.552 9.767a1.224 1.224 0 0 1-2.296 0L15.3 25.435a1.24 1.24 0 0 0-.735-.735L4.8 21.148a1.225 1.225 0 0 1 0-2.296l9.766-3.552a1.24 1.24 0 0 0 .735-.735L18.852 4.8a1.224 1.224 0 0 1 2.296 0l3.552 9.766a1.24 1.24 0 0 0 .735.735l9.767 3.552a1.224 1.224 0 0 1 0 2.296L25.435 24.7a1.24 1.24 0 0 0-.735.735"
              ></path>
              <path
                fill="#fff"
                d="m21.148 35.202 2.813 1.043.007-.018zm-2.296 0-2.82 1.025.007.018zM15.3 25.435l2.82-1.026-.005-.012zm-.735-.735 1.038-2.815-.012-.005zM4.8 21.148l-1.044 2.813.018.007zm0-2.296-1.026-2.82-.018.007zm9.766-3.552 1.026 2.82.012-.005zm.735-.735 2.815 1.038.005-.012zM18.852 4.8l-2.813-1.044-.007.018zM20 4v3zm1.148.799 2.82-1.026-.007-.018zm3.552 9.766-2.82 1.026.005.012zm.735.735-1.038 2.815.012.005zm9.767 3.552 1.043-2.813-.018-.007zm0 2.296 1.025 2.82.018-.007zM25.435 24.7l-1.026-2.82-.012.005zm-3.555-.29-3.551 9.766 5.639 2.05 3.551-9.766zm-3.544 9.747c.126-.34.353-.632.65-.84l3.426 4.927a4.22 4.22 0 0 0 1.549-1.999zm.65-.84A1.78 1.78 0 0 1 20 33v6c.862 0 1.704-.264 2.412-.756zM20 33c.362 0 .716.11 1.014.318l-3.426 4.926c.708.492 1.55.756 2.412.756zm1.014.318c.297.207.524.5.65.84l-5.625 2.087c.3.809.84 1.506 1.549 1.999zm.657.858L18.12 24.41l-5.64 2.05 3.552 9.768zm-3.556-9.779a4.2 4.2 0 0 0-.98-1.532l-4.243 4.243a1.8 1.8 0 0 1-.407-.636zm-.98-1.532a4.2 4.2 0 0 0-1.532-.98l-2.075 5.63a1.8 1.8 0 0 1-.636-.407zm-1.544-.985L5.824 18.33l-2.05 5.639 9.766 3.551zm-9.749-3.544c.34.126.633.353.84.65l-4.926 3.426a4.22 4.22 0 0 0 1.999 1.549zm.84.65C6.89 19.284 7 19.638 7 20H1c0 .862.264 1.704.756 2.412zM7 20c0 .362-.11.716-.318 1.014l-4.926-3.426A4.22 4.22 0 0 0 1 20zm-.318 1.014c-.207.297-.5.524-.84.65L3.755 16.04c-.809.3-1.506.84-1.999 1.549zm-.858.657 9.767-3.551-2.05-5.64-9.768 3.552zm9.779-3.556a4.2 4.2 0 0 0 1.532-.98l-4.243-4.243c.18-.18.397-.319.636-.407zm1.532-.98c.434-.434.768-.957.98-1.532l-5.63-2.075a1.8 1.8 0 0 1 .407-.636zm.985-1.544 3.551-9.767-5.639-2.05-3.551 9.766zm3.544-9.749c-.126.34-.353.633-.65.84l-3.426-4.926a4.22 4.22 0 0 0-1.549 1.999zm-.65.84A1.78 1.78 0 0 1 20 7V1c-.862 0-1.704.264-2.412.756zM20 7c-.362 0-.716-.11-1.014-.318l3.426-4.926A4.22 4.22 0 0 0 20 1zm-1.014-.318a1.78 1.78 0 0 1-.65-.84l5.625-2.087a4.22 4.22 0 0 0-1.549-1.999zm-.657-.858 3.551 9.767 5.64-2.05-3.552-9.768zm3.556 9.779c.212.575.546 1.098.98 1.532l4.243-4.243c.18.18.319.397.407.636zm.98 1.532c.434.434.957.768 1.532.98l2.075-5.63c.239.088.456.227.636.407zm1.544.985 9.767 3.551 2.05-5.639-9.766-3.551zm9.749 3.544a1.78 1.78 0 0 1-.84-.65l4.926-3.426a4.22 4.22 0 0 0-1.999-1.549zm-.84-.65A1.78 1.78 0 0 1 33 20h6c0-.862-.264-1.704-.756-2.412zM33 20c0-.362.11-.716.318-1.014l4.926 3.426c.492-.708.756-1.55.756-2.412zm.318-1.014c.207-.297.5-.524.84-.65l2.087 5.625c.809-.3 1.506-.84 1.999-1.549zm.858-.657L24.41 21.88l2.05 5.64 9.768-3.552zm-9.779 3.556a4.2 4.2 0 0 0-1.532.98l4.243 4.243a1.8 1.8 0 0 1-.636.407zm-1.532.98a4.2 4.2 0 0 0-.98 1.532l5.63 2.075a1.8 1.8 0 0 1-.407.636z"
                mask="url(#path-1-outside-1_5853_41067)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-bold text-md text-center">Member</h2>
          <p className="flex itmes-center text-base">
            {isAnnuallySelected ? (
              <>
                <span className="text-stone-500 line-through">$60</span>
                &nbsp;$50 USD/year
              </>
            ) : (
              <>$5 USD/month</>
            )}
          </p>
        </div>
        <div className="w-full flex flex-col justify-center px-12 gap-y-10">
          <span className="text-center text-xs text-stone-500">
            Access member-only stories and enjoy an enhanced reading and writing
            experience. <br /> Cancel anytime.
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
            <CheckIcon />
          </span>{' '}
          Read member-only stories
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Support writers you read most
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Earn money for your writing
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Listen to audio narrations
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Read offline with the Medium app
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Access our Mastodon community
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Connect your custom domain
        </p>
        <p className="flex items-center text-start text-sm text-stone-800 gap-x-5">
          <span className="text-primary">
            <CheckIcon />
          </span>{' '}
          Create your own publications
        </p>
      </div>
    </div>
  );
};

export default PlansMemberCard;
