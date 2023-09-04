import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

type Props = {};

function Navbar({}: Props) {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flextStart gap-10">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="flexible" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            User<Link href={"/create-project"}>Share Your Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
