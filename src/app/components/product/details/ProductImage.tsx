import Image from "next/image";

type ProductImageProps = {
  image: string;
  title: string;
};

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
