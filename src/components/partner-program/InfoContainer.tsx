interface Props {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
  }[];
}

const InfoContainer = ({ title, description, items }: Props) => {
  return (
    <section className="w-full flex flex-col sm:flex-row sm:gap-x-16 sm:justify-between items-start py-20 xs:py-28 px-8 xs:px-12 border-t border-solid border-black">
      <div className="w-full max-w-[484px] flex flex-col items-start gap-y-5 sm:gap-y-10 mb-20 sm:mb-auto">
        <h2 className="serif text-start text-2xl xs:text-[70px] leading-[36px] xs:leading-[74px]">
          {title}
        </h2>
        {description && (
          <p className="serif text-start text-[18px] xs:text-[21px] leading-[28px] xs:leading-[32px]">
            {description}
          </p>
        )}
      </div>
      <div className="w-full max-w-[662px] grid gap-y-5 xs:gap-y-8">
        {items.map((value, index) => {
          return (
            <div
              className={`flex flex-col pb-10 xs:pb-12 gap-y-2 ${items.length - 1 !== index ? 'border-b border-solid border-stone-200/60' : ''}`}
              key={index}
            >
              <h2 className="text-base font-bold">{value.title}</h2>
              <p className="sm:max-w-[484px] text-xs xs:text-sm text-stone-500">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InfoContainer;
