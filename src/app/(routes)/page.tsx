import { ModeToggle } from "@/components/mode-toggle";
import UserDropdown from "@/components/user-dropdown";
import { auth } from "@/lib/auth/auth";

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ModeToggle />
        <div className="user">
          {session?.user?.name ? (
            <UserDropdown />
          ) : (
            <Link href={"/signin"}>Login</Link>
          )}
        </div>
      </div>
      <div>
        <Link href={"/private"}>Go to Private Page</Link>
      </div>
    </main>
  );
}
