import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

export function NewsCard({ title, excerpt, imageUrl, date }: NewsCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <time dateTime={date}>{date}</time>
          </p>
          <a href="#" className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a
              href="#"
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
