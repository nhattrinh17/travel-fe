"use client";

export function LoadingModal(): JSX.Element {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white opacity-50">
      <div className="bg-[url(/loading.gif)] h-full w-full bg-[length:15%] lg:bg-[length:5%] bg-no-repeat bg-center"></div>
    </div>
  );
}
