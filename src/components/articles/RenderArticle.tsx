import Markdown from 'react-markdown';
import { Article, User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { MoreIcon, SaveList } from '@/atoms/icons';
import Nav from '../header/Nav';

interface Props {
  writer: User;
  metadata: Article;
  content: string;
}

const RenderArticle = ({ writer, metadata, content }: Props) => {
  return (
    <section className="bg-white w-full h-full flex flex-col">
      <Nav />
      <div className="w-full h-full flex justify-center">
        <div className="w-full max-w-[680px] h-full flex flex-col items-center justify-center py-20">
          <div className="border-b border-solid border-stone-200">
            <h1 className="font-bold text-[42px] leading-[52px]">
              {metadata.title}
            </h1>
            <div className="w-full flex items-start gap-x-7 py-14">
              <Image
                src={writer.photoUrl}
                alt={writer.name}
                width={44}
                height={44}
                className="rounded-full w-[44px] h-[44px]"
              />
              <div className="flex flex-col items-start gap-y-2">
                <div className="flex items-center gap-x-3">
                  <Link
                    href={`#/${writer.username}`}
                    className="text-start text-base text-stone-800"
                  >
                    {writer.name}
                  </Link>
                  <span className="text-start text-base text-stone-600">·</span>
                  <button className="text-start text-base text-stone-800 underline">
                    Follow
                  </button>
                </div>
                <div className="flex items-center gap-x-3">
                  <span className="text-start text-sm text-stone-600">
                    5 min read
                  </span>
                  <span className="text-start text-sm text-stone-600">·</span>
                  <button className="text-start text-sm text-stone-600">
                    {new Date(metadata.createdAt).toLocaleDateString()}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between border-b border-solid border-stone-200 py-7 mb-20 px-5">
            <div className="flex items-start gap-x-20">
              <button className="text-stone-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-label="clap"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M11.37.828 12 3.282l.63-2.454zM13.916 3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523 18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951 1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1 .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324 6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1 .585.242l2.158 2.157a.365.365 0 0 0 .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438 3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826 0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0 .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1 .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0 .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1 .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277 6.75-1.156 1.156-2.602 1.627-4.19 1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465 1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0 1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355 1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0 0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0 0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56 1.56 0 0 0-2.21-.01 1.55 1.55 0 0 0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0 2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0 0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0 1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567 2.763-2.763 2.552-5.734 1.439-7.586z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="text-stone-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M18.006 16.803c1.533-1.456 2.234-3.325 2.234-5.321C20.24 7.357 16.709 4 12.191 4S4 7.357 4 11.482c0 4.126 3.674 7.482 8.191 7.482.817 0 1.622-.111 2.393-.327.231.2.48.391.744.559 1.06.693 2.203 1.044 3.399 1.044.224-.008.4-.112.486-.287a.49.49 0 0 0-.042-.518c-.495-.67-.845-1.364-1.04-2.057a4 4 0 0 1-.125-.598zm-3.122 1.055-.067-.223-.315.096a8 8 0 0 1-2.311.338c-4.023 0-7.292-2.955-7.292-6.587 0-3.633 3.269-6.588 7.292-6.588 4.014 0 7.112 2.958 7.112 6.593 0 1.794-.608 3.469-2.027 4.72l-.195.168v.255c0 .056 0 .151.016.295.025.231.081.478.154.733.154.558.398 1.117.722 1.659a5.3 5.3 0 0 1-2.165-.845c-.276-.176-.714-.383-.941-.59z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-x-10">
              <button className="text-stone-500">
                <SaveList />
              </button>
              <button className="text-stone-500">
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
                    d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m3.376 10.416-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416l4.599 3.066a.5.5 0 0 1 0 .832"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="text-stone-500">
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
                    d="M15.218 4.931a.4.4 0 0 1-.118.132l.012.006a.45.45 0 0 1-.292.074.5.5 0 0 1-.3-.13l-2.02-2.02v7.07c0 .28-.23.5-.5.5s-.5-.22-.5-.5v-7.04l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.79a.42.42 0 0 1 .068.498m-.106.138.008.004v-.01zM16 7.063h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11c-1.1 0-2-.9-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.15.5.5 0 0 1 .15.35.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9v-10.2c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="text-stone-500">
                <MoreIcon />
              </button>
            </div>
          </div>
          <Markdown
            components={{
              h1({ children }) {
                return <h1 className="hidden">{children}</h1>;
              },
              h2({ children }) {
                return (
                  <h2 className="w-full text-start text-lg font-bold mt-3 mb-2">
                    {children}
                  </h2>
                );
              },
              p({ children }) {
                return (
                  <p className="serif w-full text-start text-md leading-[32px] mb-14 text-stone-800">
                    {children}
                  </p>
                );
              },
              em({ children }) {
                return (
                  <em className="serif w-full text-start text-md leading-[32px] mb-14 text-stone-700">
                    {children}
                  </em>
                );
              },
              strong({ children }) {
                return (
                  <strong className="serif w-full text-start text-md leading-[32px] mb-14 text-black font-extrabold">
                    {children}
                  </strong>
                );
              },
              li({ children }) {
                return (
                  <li className="serif w-full text-start text-md leading-[32px] mb-8 mx-14 text-stone-800 list-disc">
                    {children}
                  </li>
                );
              },
              a({ children, ...rest }) {
                return (
                  <a
                    className="serif w-full text-start text-md leading-[32px] underline my-8 text-stone-800"
                    {...rest}
                  >
                    {children}
                  </a>
                );
              }
            }}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </section>
  );
};

export default RenderArticle;
