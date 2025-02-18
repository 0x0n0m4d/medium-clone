interface Props {
  index: number;
  title: string;
  content: string;
  contentClassName?: string;
}

const HowItWorksItem = ({ index, title, content, contentClassName }: Props) => {
  return (
    <div className="flex items-start">
      <h3 className="serif text-[18px] xs:text-[24px] sm:text-xl 2xl:text-2xl mr-3 xs:mr-7">
        {index}.
      </h3>
      <div className="flex flex-col items-start gap-y-3">
        <h3 className="serif text-[18px] xs:text-[24px] sm:text-xl 2xl:text-2xl">
          {title}
        </h3>
        <div
          className={`w-screen max-w-[266px] xs:max-w-[365px] sm:max-w-[408px] 2xl:max-w-[508px] ${contentClassName}`}
        >
          <span className="text-start text-black/70">{content}</span>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksItem;
