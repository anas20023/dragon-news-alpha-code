'use server'
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsDetailsById } from "@/lib/data";


import {
    FaEye,
    FaStar,
    FaArrowLeft,
    FaFire,
    FaCalendarAlt,
    FaUserEdit,
} from "react-icons/fa";
import { Avatar, Button, Card, Chip } from "@heroui/react";

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const newsDetails = await getNewsDetailsById(id) || [];

    if (!newsDetails) {
        notFound();
    }

    const {
        title,
        details,
        image_url,
        author,
        rating,
        total_view,
        others_info,
    } = newsDetails;

    return (
        <section className="min-h-screen bg-default-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <div className="mb-6">
                    <Link href={'/'}>
                        <Button
                            variant="outline"
                            color="danger"
                            className="font-medium"
                        >
                            <FaArrowLeft />  All news in this category
                        </Button></Link>
                </div>

                {/* Main Card */}
                <Card className="overflow-hidden border border-default-200 shadow-xl">
                    {/* Hero Image */}
                    <div className="relative w-full h-62.5 md:h-125">
                        <Image
                            src={image_url}
                            alt={title}
                            fill
                            priority
                            className="object-cover"
                        />

                        {others_info?.is_trending && (
                            <Chip
                                color="danger"
                                className="absolute top-4 left-4 z-10 font-semibold"
                            >
                                <FaFire /> Trending
                            </Chip>
                        )}
                    </div>

                    {/* Header Section */}
                    <div className="p-6 md:p-10 space-y-5">
                        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-default-900">
                            {title}
                        </h1>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm md:text-base text-default-500">
                            <span className="flex items-center gap-2">
                                <FaCalendarAlt className="text-danger" />
                                {new Date(author?.published_date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaEye className="text-primary" />
                                {total_view} views
                            </span>

                            <span className="flex items-center gap-2">
                                <FaStar className="text-warning" />
                                {rating.number} ({rating.badge})
                            </span>
                        </div>
                    </div>

                    {/* <Divider /> */}

                    {/* Body Section */}
                    <div className="p-6 md:p-10 space-y-8">
                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <Avatar>
                                <Avatar.Image alt="John Doe" src={author.img} />
                                <Avatar.Fallback className="font-bold text-xl">{author.name.slice(0,2).toUpperCase()}</Avatar.Fallback>
                            </Avatar>

                            <div>
                                <p className="flex items-center gap-2 text-lg font-semibold">
                                    {author.name}
                                </p>
                                <p className="text-sm text-default-500">News Author</p>
                            </div>
                        </div>

                        {/* <Divider /> */}

                        {/* Article Details */}
                        <article className="whitespace-pre-line text-base md:text-lg leading-8 text-default-700">
                            {details}
                        </article>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default NewsDetailsPage;