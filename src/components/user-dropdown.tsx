import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "@/lib/auth/auth";
import Image from "next/image";

const UserDropdown = async () => {
  const session = await auth();
  const handleLogout = async () => {
    "use server";

    await signOut();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3">
          {session?.user.image && (
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src={session.user.image}
              alt="user profile picture"
            />
          )}
          <div>{session?.user.name}</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem className="p-0">
          <form action={handleLogout}>
            <Button className="w-full" variant={"ghost"}>
              Logout
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
