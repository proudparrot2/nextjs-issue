'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-48">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <p className="text-xl text-gray-500">
          Uh oh... it seems like the page you tried to visit doesn't exist.{" "}
          <br />
          <span className="mt-4 flex gap-2 items-center justify-center">
            <Button asChild>
              <Link href="/">Go home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/art-class/v4/issues/new/choose"
                target="_blank"
              >
                Report issue
              </Link>
            </Button>
          </span>
        </p>
      </div>
    </div>
  );
}
