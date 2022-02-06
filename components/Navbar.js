import NotesIcon from '@material-ui/icons/Notes';
import HomeIcon from '@material-ui/icons/Home';
import DehazeIcon from '@material-ui/icons/Dehaze';
import Link from 'next/link';

export default function Navbar() {

    return (
        <nav className="flex justify-between items-center bg-[#004445] text-white p-1 shadow-md shadow-[#2C7873]/50 md:p-3">

            <h1 className="text-lg items-center font-semibold ml-1 flex space-x-2 md:text-2xl">
                <NotesIcon fontSize="large" />
                <p>TextStar</p>
            </h1>

            <ul className="flex items-center space-x-4 text-sm md:text-base">

                <li>
                    <Link href="/">
                        <a className="hover:text-base flex items-center space-x-2 md:hover:text-lg">
                            <HomeIcon />
                            <p>Home</p>
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        <a className="hover:text-base flex items-center space-x-2 md:hover:text-lg">
                            <DehazeIcon />
                            <p>About</p>
                        </a>
                    </Link>
                </li>

            </ul>

        </nav>


    );
}