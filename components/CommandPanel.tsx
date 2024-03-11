"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Gamepad2,
  Command,
  Clapperboard,
  Joystick,
  Globe2,
} from "lucide-react";

import Image from "next/image";
import Obfuscated from "./Obfuscated";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    // @ts-ignore
    window.triggerCommandWindow = () => {
      setOpen((open) => !open);
    };
  });

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search the website" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          <CommandItem
            className="flex gap-2"
            onSelect={() => {
              runCommand(() => router.push(`/games`));
            }}
          >
            <Gamepad2 /> Games
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => {
              runCommand(() => router.push(`/apps`));
            }}
          >
            <Command /> Apps
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => {
              runCommand(() => router.push(`/movies`));
            }}
          >
            <Clapperboard /> Movies
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => {
              runCommand(() => router.push(`/emulator`));
            }}
          >
            <Joystick /> Emulator
          </CommandItem>
          <CommandItem
            className="flex gap-2"
            onSelect={() => {
              runCommand(() => router.push(`/search`));
            }}
          >
            <Globe2 />
            <span>
              <Obfuscated text="Proxy" />
            </span>
          </CommandItem>
        </CommandGroup>
        {/* <CommandGroup heading="Games">
          {games.map((game) => {
            return (
              <CommandItem
                className="flex gap-2"
                key={game.title}
                onSelect={() => {
                  runCommand(() => router.push(`/games/${game.id}`));
                }}
              >
                <Image
                  className="rounded-md"
                  src={game.image}
                  height={24}
                  width={24}
                  alt={game.title}
                />{" "}
                {game.title}
              </CommandItem>
            );
          })}
        </CommandGroup> */}
      </CommandList>
    </CommandDialog>
  );
}
