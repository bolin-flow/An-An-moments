import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo1.png" alt="logo" width={24} height={24} />
          <p>知行合一</p>
              </Link>
              
              <ul>
                  <Link href="/">Home</Link>
                  <Link href="/">Moments</Link>
          <Link href="/">Create Moment</Link>
          <Link href="/mind-train">Mind Train</Link>
              </ul>
      </nav>
    </header>
  );
};

export default NavBar;
