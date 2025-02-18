'use client';

import { useState } from 'react';

interface Props {
  title: string;
  info: string;
}

const NestedAboutInfo = ({ title, info }: Props) => {
  const [isItemOpen, setIsItemOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-start justify-start border-b border-solid border-white my-12">
      <button
        className="w-full flex items-center justify-between text-white gap-x-2"
        onClick={e => {
          e.preventDefault();
          setIsItemOpen(!isItemOpen);
        }}
      >
        <h2 className="text-base text-start font-bold">{title}</h2>
        {isItemOpen ? (
          <i className="fa-solid fa-chevron-up text-base" />
        ) : (
          <i className="fa-solid fa-chevron-down text-base" />
        )}
      </button>
      <div
        className={`xs:max-w-[400px] lg:max-w-[471px] 2xl:max-w-[482px] mb-12 transition-all ${isItemOpen ? 'mt-8' : ''}`}
      >
        {isItemOpen && (
          <span className="items-start text-start text-white text-xs xs:text-sm">
            {info}
          </span>
        )}
      </div>
    </div>
  );
};

export default NestedAboutInfo;
