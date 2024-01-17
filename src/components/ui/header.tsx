"use client";

import Link from "next/link";
import { Card } from "./card";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="flex items-center justify-center border-none px-4 py-3">
      <Link href={"/"}>
        <Image
          width={0}
          height={0}
          alt="logotipo"
          src={"logotipo.svg"}
          className="h-auto w-full max-w-36"
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </Link>
    </Card>
  );
};

export default Header;
