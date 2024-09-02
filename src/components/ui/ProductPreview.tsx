export const ProductPreview = () => {
  return (
    <div className="relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[640px] w-[300px] shadow-xl drop-shadow-purple">
      <div
        className="h-[32px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div
        className="h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div
        className="h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -left-[17px] top-[178px] rounded-l-lg"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div
        className="h-[64px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"
        role="presentation"
        aria-hidden="true"
      ></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[593px] bg-white dark:bg-zinc-800">
        <div className="relative w-[272px] h-[605px] overflow-hidden">
          <video
            className="h-full w-full"
            controls
            controlsList="nodownload"
            playsInline
            poster="/rectangularLogo.webp"
            aria-label="Vista previa del producto Clarify"
          >
            <source
              src="https://res.cloudinary.com/dmlpgks2h/video/upload/f_auto:video,q_auto/v1/clarify/z1pnzxue9yeihhnbd6wn"
              type="video/mp4"
            />
            <track
              src="/subtitles/subtitles-es.vtt"
              kind="captions"
              srcLang="es"
              label="Español"
            />
            <track
              src="/subtitles/subtitles-en.vtt"
              kind="captions"
              srcLang="en"
              label="English"
            />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className="absolute -bottom-2 left-[7.7rem] w-6 h-6 bg-gray-600 rounded-full"></div>
        <div className="absolute -top-2 left-[5.3rem] w-28 h-1 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};
