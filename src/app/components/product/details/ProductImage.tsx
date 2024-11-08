import Image from "next/image";

type ProductImageProps = {
  image: string;
  title: string;
};

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <div className="relative aspect-square max-w-xs mx-auto overflow-hidden rounded-lg shadow-lg bg-white">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
}
