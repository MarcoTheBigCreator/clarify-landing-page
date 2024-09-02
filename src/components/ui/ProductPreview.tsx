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
            className="h-full w-full object-cover"
            controls
            controlsList="nodownload"
            poster="https://res.cloudinary.com/dmlpgks2h/image/upload/v1725234522/clarify/xbwdrw6asxcfxks4zlqg.png"
            aria-label="Vista previa del producto Clarify"
          >
            <source
              src="https://res.cloudinary.com/dmlpgks2h/video/upload/v1725233438/clarify/z1pnzxue9yeihhnbd6wn.mov"
              type="video/mp4"
            />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
        <div className="absolute bottom-1 left-20 w-28 h-1.5 bg-gray-500 rounded"></div>
      </div>
    </div>
  );
};
