export const ProductPreview = () => {
  return (
    <div className="relative mx-auto bg-gray-900 rounded-[2.5rem] h-[600px] w-[300px] shadow-xl flex items-center justify-center">
      <div className="absolute top-4 w-24 h-1.5 bg-gray-700 rounded"></div>{' '}
      {/* Notch */}
      <div className="absolute bottom-4 w-24 h-1.5 bg-gray-700 rounded"></div>{' '}
      {/* Bottom speaker */}
      <div className="relative w-[272px] h-[540px] bg-black rounded-[2rem] overflow-hidden">
        <video
          className="h-full w-full"
          controls
          controlsList="nodownload"
          poster="https://res.cloudinary.com/dmlpgks2h/image/upload/v1725059400/clarify/cgmo8iboqpb4mckfldg3.jpg"
        >
          <source
            src="https://res.cloudinary.com/dmlpgks2h/video/upload/v1725059424/clarify/fv8ivudtxxg8ufd0r9sb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
