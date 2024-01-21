"use client";
import { Star, Tray, Users } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const BottomBar = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <div className="absolute bottom-0 flex h-auto w-full items-center justify-around bg-white py-2 text-gray500">
      <Button variant={"ghost"}>
        <Link
          href={"/"}
          className={pathname === "/" ? "text-blue500" : "text-gray500"}
        >
          <Tray size={32} weight={pathname === "/" ? "bold" : "regular"} />
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link href={"/today"}>
          <Star size={32} weight={pathname === "/today" ? "bold" : "regular"} />
        </Link>
      </Button>
      <Button variant={"ghost"}>
        <Link href={"/users"}>
          <Users
            size={32}
            weight={pathname === "/users" ? "bold" : "regular"}
          />
        </Link>
      </Button>
      <Avatar>
        <AvatarFallback>{data?.user?.name?.[0]?.toUpperCase()}</AvatarFallback>
        {data?.user?.image && <AvatarImage src={data.user.image} />}
      </Avatar>
      <button onClick={handleSignOutClick}>Sair</button>
    </div>
  );
};

export default BottomBar;
