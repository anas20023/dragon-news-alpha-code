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
            className="w-full justify-start font-medium"
            radius="sm"
          >
            <FaGithub className="text-lg" /> Login with Github
          </Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-xl font-semibold">Find Us On</h2>

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
      </div>

    </aside>
  );
};

export default RightSideBar;
