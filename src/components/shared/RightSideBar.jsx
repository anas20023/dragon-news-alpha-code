"use client";

import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const qZoneItems = [
  {
    id: 1,
    title: "Swimming",
    image: "https://i.ibb.co.com/9p3Cnk9/swimming.png",
  },
  {
    id: 2,
    title: "Class",
    image: "https://i.ibb.co.com/2kR7dM2/class.png",
  },
  {
    id: 3,
    title: "Play Ground",
    image: "https://i.ibb.co.com/4R7JvL7/playground.png",
  },
];

const RightSideBar = () => {
  return (
    <aside className="w-full space-y-6">
      <div>
        <h2 className="mb-4 text-xl font-semibold">Login With</h2>

        <div className="flex flex-col gap-3">
          <Button
            variant="bordered"
            className="w-full justify-start font-medium"
            radius="sm"
          >
            <FaGoogle className="text-primary text-lg" />
            Login with Google
          </Button>

          <Button
            variant="bordered"
            startContent={<FaGithub className="text-lg" />}
            className="w-full justify-start font-medium"
            radius="sm"
          >
            Login with Github
          </Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Find Us On</h2>

        <Card shadow="sm" radius="sm" className="border">
          <div className="p-0">
            <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-default-100">
              <FaFacebookF className="text-blue-600" />
              <span>Facebook</span>
            </button>

            <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-default-100">
              <FaTwitter className="text-sky-500" />
              <span>Twitter</span>
            </button>

            <button className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-default-100">
              <FaInstagram className="text-pink-500" />
              <span>Instagram</span>
            </button>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Q-Zone</h2>

        <Card className="bg-default-100" radius="sm" shadow="none">
          <div className="space-y-4 p-4">
            {qZoneItems.map((item) => (
              <Card key={item.id} shadow="sm" radius="sm">
                <div className="flex flex-col items-center p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={140}
                    className="rounded-md object-cover"
                  />
                  <p className="mt-3 text-sm font-medium">{item.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>

      <Card
        radius="sm"
        className="overflow-hidden bg-linear-to-b from-purple-900 to-slate-950 text-white"
      >
        <div className="p-0">
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co.com/ZYW3VTp/bg.png"
            alt="Banner"
            className="h-full w-full object-cover"
          />
        </div>
      </Card>
    </aside>
  );
};

export default RightSideBar;
