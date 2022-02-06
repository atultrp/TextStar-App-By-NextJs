

export default function About() {

    return (
        <div className="mx-5 my-3 md:mx-40">
                <h1 className="mb-3 text-center text-2xl my-3 text-[#11324D] font-medium md:text-3xl">About Us</h1>
                <p className="text-center">
                    Learn more about the <strong>TextStar</strong>, who created this, what's its features are and what techs are included.
                </p>
                <div>
                    <h2 className="font-medium my-3 text-[#11324D] text-lg">Introduction</h2>
                    <p className=" ">
                        Basically, <strong>TextStar</strong> is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from uppercase to lowercase and lowercase to uppercase. And provided Minute Count time to read the text. Here is one more feature to preview all the text that user enters.
                    </p>
                </div>
                <div>
                    <h2 className="font-medium my-3 text-[#11324D] text-lg">Tech Included</h2>
                    <p className="lead ">
                        <ul className="list-disc mx-6">
                            <li>HTML</li>
                            <li>NextJs</li>
                            <li>JavaScript</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h2 className="font-medium my-3 text-[#11324D] text-lg">Creator</h2>
                    <p className="lead">
                        Hey there, I'm <strong>Atul Tripathi</strong> from India.
                        My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                        <br />
                        I am also an <strong>open-source</strong> enthusiast and maintainer. I learned a lot from the open-source community and I love how <strong>collaboration and knowledge sharing</strong> happened through open-source.
                    </p>
                </div>
                <br />
                <div>
                    <h2 className="font-medium my-3 text-[#11324D] text-lg">Last but not Least!</h2>
                    <p className="lead">
                        How to reach me -
                        <ul className=" my-3 flex">
                            <li className="my-1">
                                <a href="https://twitter.com/atultrp_">
                                    <button type="button" className="bg-[#004445] text-white font-semibold p-1 rounded-r-md mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 shadow-md shadow-[#11324D]/50 md:p-2">Twitter</button>
                                </a>
                            </li>
                            <li className="my-1">
                                <a href="https://github.com/atultrp">
                                    <button type="button" className="bg-[#2C7873] text-white font-semibold p-1 rounded-r-md mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 shadow-md shadow-[#11324D]/50 md:p-2">GitHub</button>
                                </a>
                            </li>
                            <li className="my-1">
                                <a href="https://instagram.com/atultrp">
                                    <button type="button" className="bg-[#004445] text-white font-semibold p-1 rounded-r-md mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 shadow-md shadow-[#11324D]/50 md:p-2">Instagram</button>
                                </a>
                            </li>
                            <li className="my-1">
                                <a href="https://www.linkedin.com/in/atultrp-">
                                    <button type="button" className="bg-[#2C7873] text-white font-semibold p-1 rounded-r-md mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 shadow-md shadow-[#11324D]/50 md:p-2">LinkedIn</button>
                                </a>
                            </li>
                            
                        </ul>
                        Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
                        <button type="button" className="btn btn-light">Atul Tripathi</button>
                        </a>
                    </p>
                </div>
            </div>
    );
}