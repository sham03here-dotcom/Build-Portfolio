import Image from "next/image";
import type { CaseImage } from "@/types";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";

type Props = {
  columns: 1 | 2 | 3;
  images: CaseImage[];
  className?: string;
};

const cols: Record<Props["columns"], string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
};

/**
 * Grid of brand/application photos, staggered in on scroll.
 * A pair with unequal intrinsic widths renders as a proportional row
 * (matching side-by-side exhibits of different widths but equal height);
 * single images narrower than the content column center at natural size.
 */
export function GalleryGrid({ columns, images, className }: Props) {
  const unequalPair =
    columns === 2 && images.length === 2 && images[0].width !== images[1].width;

  if (unequalPair) {
    return (
      <div className={cn("flex flex-col gap-4 sm:flex-row md:gap-5", className)}>
        {images.map((img, i) => (
          <div key={img.src} style={{ flexGrow: img.width, flexBasis: 0 }}>
            <Reveal delay={i * 0.08}>
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </Reveal>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-4 md:gap-5", cols[columns], className)}>
      {images.map((img, i) => (
        <Reveal key={img.src} delay={(i % 3) * 0.08}>
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            sizes={columns === 1 ? "(min-width: 1024px) 992px, 100vw" : "(min-width: 768px) 33vw, 50vw"}
            className={cn(
              "h-auto",
              columns === 1 && img.width < 950 ? "mx-auto max-w-full" : "w-full",
            )}
          />
        </Reveal>
      ))}
    </div>
  );
}
