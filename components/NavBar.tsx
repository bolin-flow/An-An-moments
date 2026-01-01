import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>NavBar Text</p>
              </Link>
              
              <ul>
                  <Link href="/">Home</Link>
                  <Link href="/">Moments</Link>
                    <Link href="/">Create Moment</Link>
              </ul>
      </nav>
    </header>
  );
};

export default NavBar;
