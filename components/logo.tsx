import Image from "next/image";
import Link from "next/link";

import logo from "../public/images/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <Image src={logo} alt="logo" />
      <span>TASTE</span>
    </Link>
  );
};

export default Logo;
