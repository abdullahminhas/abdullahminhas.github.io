import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import Link from "next/link";

interface Testimonial10Props {
  quote: string;
  authorName: string;
  authorRating: number;
  authorDesignation: string,
  authorAvatarSrc: string;
  authorAvatarAlt: string;
  className?: string;
  link?: string;
}

export function Testimonial10({
  quote,
  authorName,
  authorRating,
  authorDesignation,
  authorAvatarSrc,
  authorAvatarAlt,
  className,
  link,
}: Testimonial10Props) {
  return (
    <Link href={link || "#"} target="_blank">
      <div
        className={`flex flex-col items-center text-center ${
          className || ""
        }`}
      >
        <p className="mb-8 font-medium lg:text-2xl break-words">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-2 md:gap-4">
          <Avatar className="size-12 md:size-16">
            <AvatarImage src={authorAvatarSrc} alt={authorAvatarAlt} />
            <AvatarFallback>{authorName}</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="capitalize text-sm font-medium md:text-base">
              {authorName}
            </p>
            {authorRating !== 0 && (
              <div className="mb-6 flex gap-1">
                {Array.from({ length: authorRating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            )}
            <p className="text-muted-foreground text-sm md:text-base">
                {authorDesignation}
              </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
