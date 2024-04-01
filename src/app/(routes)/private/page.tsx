import { auth } from "@/lib/auth/auth";
import Link from "next/link";

const PrivatePage = async () => {
  const session = await auth();
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-6">
      <div className="flex w-1/2 flex-col items-center">
        <h2>Welcome {session?.user?.name}</h2>
        <Link href={"/"}>Return to Homepage</Link>
      </div>
    </div>
  );
};

export default PrivatePage;
