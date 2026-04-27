import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
 // console.log(news)
  const { title, author, image_url, details, rating, total_view } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return (
    <div className="mx-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-100 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src={author.img}
              alt={'an alter message for all pics'}
              fill
              className="rounded-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaRegBookmark className="hover:text-orange-500" />
          <FaShareAlt className="hover:text-orange-500" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h1 className="text-xl font-bold text-gray-900 leading-snug">
          {title}
        </h1>
      </div>

      {/* Main Image */}
      <div className="px-4 py-4">
        <div className="relative w-full h-64">
          <Image
            src={image_url}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>
      </div>

      {/* Details */}
      <div className="px-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>

        <Link href={`/news/${news._id}`} className="no-underline">
          <Button variant="danger-soft" className="mt-2">
            Read More
          </Button></Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-4 border-t mt-4">
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < Math.round(rating.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-gray-700 font-medium">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;