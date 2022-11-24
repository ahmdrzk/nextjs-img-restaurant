import Image from "next/image";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

type ImageCardProps = {
  drawingImg: StaticImageData;
  originalImage: StaticImageData;
};

const ImageCard = ({ drawingImg, originalImage }: ImageCardProps) => {
  return (
    <div className="image-card">
      <div className="image-card__curtain">
        <Image src={drawingImg} alt="restaurant front" />
      </div>
      <Image src={originalImage} alt="restaurant front" className="image-card__orig-img" />
    </div>
  );
};

export default ImageCard;
