import { useRef } from "react";

export const TikTokSection = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-xl">
            <iframe
              ref={iframeRef}
              src="https://www.tiktok.com/player/v1/7419180186194726149?controls=1&description=0"
              className="w-full h-[540px]"
              allow="fullscreen"
              title="TikTok Grupo Bimbo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};