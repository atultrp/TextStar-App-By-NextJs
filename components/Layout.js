import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ children, title = "TextStar App" }) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="TextStar is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from uppercase to lowercase and lowercase to uppercase." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer className="text-center text-[#11324D]">
                &copy; 2022 Star Industries
            </footer>
        </div>
    );
}

export default Layout;