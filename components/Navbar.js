import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import NotesIcon from '@material-ui/icons/Notes';
import HomeIcon from '@material-ui/icons/Home';
import DehazeIcon from '@material-ui/icons/Dehaze';

export default function Navbar() {

    return (
        // <nav className="flex justify-between items-center flex-wrap bg-[#11324D] p-3 shadow-md shadow-[#11324D]/50">
        //     <h1 className="text-2xl font-semibold text-white ml-5 items-center flex space-x-2">
        //         <NotesIcon fontSize="large"  /> 
        //         <p>TextStar</p>
        //     </h1>
        //     <ul className="flex space-x-4 mr-5">
        //         <li>
        //             <a href="/" className="hover:text-white flex text-teal-100 items-center space-x-2">
        //                 <HomeIcon />
        //                 <p>Home</p>
        //             </a>
        //         </li>
        //         <li>
        //             <a href="/" className="hover:text-white flex text-teal-100 items-center space-x-2">
        //                 <DehazeIcon  />
        //                 <p>About</p>
        //             </a>
        //         </li>
        //     </ul>
        // </nav>

        <nav className="flex justify-between items-center bg-[#004445] text-white p-1 shadow-md shadow-[#2C7873]/50 md:p-3">

            <h1 className="text-lg items-center font-semibold ml-1 flex space-x-2 md:text-2xl">
                <NotesIcon fontSize="large" />
                <p>TextStar</p>
            </h1>

            <ul className="flex items-center space-x-4 text-sm md:text-base">

                <li>
                    <a href="/" className="hover:text-base flex items-center space-x-2 md:hover:text-lg">
                        <HomeIcon />
                        <p>Home</p>
                    </a>
                </li>

                <li>
                    <a href="/" className="hover:text-base flex items-center space-x-2 md:hover:text-lg">
                        <DehazeIcon />
                        <p>About</p>
                    </a>
                </li>

            </ul>

        </nav>


    );
}