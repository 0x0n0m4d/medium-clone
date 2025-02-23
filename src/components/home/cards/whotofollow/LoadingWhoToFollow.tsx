const LoadingWhoToFollow = () => {
  const containers = [1, 2, 3];

  return (
    <div className="w-full flex flex-col gap-y-7 pt-7">
      <div className="font-bold text-base text-start h-[24px] w-[100px] bg-stone-200 rounded-full" />
      <div className="w-full flex flex-col gap-y-7">
        {containers.map(num => {
          return (
            <div className="w-full flex justify-between" key={num}>
              <div className="w-[32px] h-[32px] rounded-full bg-stone-200" />
              <div className="w-full flex items-center">
                <div className="flex flex-col gap-y-2 max-w-[175px]">
                  <div className="h-[24px] w-[170px] bg-stone-200 rounded-full" />
                  <div className="h-[19px] w-[170px] bg-stone-200 rounded-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-[21px] w-[140px] bg-stone-200 rounded-full" />
    </div>
  );
};

export default LoadingWhoToFollow;
