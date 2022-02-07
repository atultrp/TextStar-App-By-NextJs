import Button from "./Button";

export default function About() {

    return (
        <div className="mx-5 my-3 md:mx-40">
            <h1 className="mb-3 text-center text-2xl my-3 text-[#11324D] font-medium md:text-3xl">About Us</h1>
            <p className="text-center md:text-lg">
                Learn more about the <strong>TextStar</strong>, who created this, what's its features are and what techs are included.
            </p>
            <div>
                <h2 className="font-medium my-3 text-[#11324D] text-xl">Introduction</h2>
                <p className="md:text-lg">
                    Basically, <strong>TextStar</strong> is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra spaces, copy the manipulated text as well as convert your text from uppercase to lowercase and lowercase to uppercase. And provided Minute Count time to read the text. Here is one more feature to preview all the text that user enters.
                </p>
            </div>
            <div>
                <h2 className="font-medium my-3 text-[#11324D] text-xl">Tech Included</h2>
                <p className="md:text-lg">
                    <ul className="list-disc mx-6">
                        <li>HTML</li>
                        <li>NextJs</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </p>
            </div>
            <div>
                <h2 className="font-medium my-3 text-[#11324D] text-xl">Creator</h2>
                <p className="md:text-lg">
                    Hey there, I'm <strong>Atul Tripathi</strong> from India.
                    My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                    <br />
                    I am also an <strong>open-source</strong> enthusiast and maintainer. I learned a lot from the open-source community and I love how <strong>collaboration and knowledge sharing</strong> happened through open-source.
                </p>
            </div>
            <br />
            <div>
                <h2 className="font-medium my-3 text-[#11324D] text-xl">Last but not Least!</h2>
                <p className="md:text-lg">
                    How to reach me -
                    <ul className=" my-3 flex">
                        <li className="my-1">
                            <a href="https://twitter.com/atultrp_">
                                <Button buttonTitle="Twitter" backColor="bg-[#004445]" />
                            </a>
                        </li>
                        <li className="my-1">
                            <a href="https://github.com/atultrp">
                                <Button buttonTitle="Github" backColor="bg-[#2C7873]" />

                            </a>
                        </li>
                        <li className="my-1">
                            <a href="https://instagram.com/atultrp">
                            <Button buttonTitle="Instagram" backColor="bg-[#004445]" />
                            </a>
                        </li>
                        <li className="my-1">
                            <a href="https://www.linkedin.com/in/atultrp-">
                            <Button buttonTitle="LinkedIn" backColor="bg-[#2C7873]" />
                            </a>
                        </li>

                    </ul>
                    Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
                        <button type="button">Atul Tripathi</button>
                    </a>
                </p>
            </div>
        </div>
    );
}