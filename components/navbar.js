import Link from 'next/link';
import Image from 'next/image';
// import logo from '../assets/logo.png';

export default function Navbar({ session }) {
  return (
    <div className="navbar-top">
      <div className="navbar-start">
        <Link href="/">
          Logo
          {/* <Image src={logo} width={70} height={70} alt="logo" /> */}
        </Link>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <Link href="/">
              <i class="bi bi-house"></i>Home
            </Link>
          </li>
          <li>
            <Link href="/jobs">
              <i class="bi bi-person-workspace"></i>jobs
            </Link>
          </li>
          <li>
            <Link href="/ideas">
              <i class="bi bi-bag-heart"></i>Popular Ideas
            </Link>
          </li>
          <li>
            <Link href="/contribute">
              <i class="bi bi-balloon-heart"></i>Contribute your Ideas
            </Link>
          </li>
          <li>
            <Link href="/profile/edit-profile">
              <i class="bi bi-pencil-square"></i>Edit Profile
            </Link>
          </li>
          <li>
            <Link href="/public-profile/">
              <i class="bi bi-person-bounding-box"></i>Profile
            </Link>
          </li>
          <li>
            <Link href="/bookmarks">
              <i class="bi bi-bookmark"></i>Bookmarks
            </Link>
          </li>
          <li>
            <Link href="/login">
              <i class="bi bi-person-fill-lock"></i>Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
