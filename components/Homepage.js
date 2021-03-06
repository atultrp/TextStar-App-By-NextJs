import { useState } from "react";
import ShortTextIcon from '@material-ui/icons/ShortText';
import AlbumIcon from '@material-ui/icons/Album';
import Button from "./Button";

const Homepage = () => {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <div className="mx-5 my-3 md:mx-40">

            <h1 className="mb-3 text-xl my-3 text-[#11324D] font-medium md:text-3xl">
                Enter text to analyse below <ShortTextIcon fontSize="large" />
            </h1>

            <textarea cols="25" rows="10" className="mt-1 text-[#11324D] form-control block w-full px-3 py-1.5 text-sm font-normal bg-white bg-clip-padding border border-solid border-teal-400 rounded-r-md transition ease-in-out m-0 focus:text-[#11324D]:bg-white focus:border-teal-900 focus:outline-none shadow-md shadow-[#11324D]/50 md:mt-3 md:text-base" value={text} onChange={handleOnChange}></textarea>

            <div className="text-sm md:text-base">

                <Button  handleClick={handleUpClick} buttonTitle="UpperCase" backColor="bg-[#004445]"/>
                <Button  handleClick={handleLowClick} buttonTitle="LowerCase" backColor="bg-[#2C7873]"/>
                <Button  handleClick={handleRemoveSpace} buttonTitle="Remove Extra Space" backColor="bg-[#004445]"/>
                <Button  handleClick={handleCopy} buttonTitle="Copy Text" backColor="bg-[#2C7873]"/>
                <Button  handleClick={handleClearClick} buttonTitle="Clear Text" backColor="bg-[#004445]"/>


                <div className="my-3">
                    <h2 className="text-xl my-3 text-[#11324D] font-medium md:text-2xl">
                        <AlbumIcon /> Your text summary!
                    </h2>
                    <div
                        className="text-[#143c5c] rounded-r-md p-1.5 shadow-md shadow-[#11324D]/50 bg-clip-padding border border-solid border-teal-400 md:text-base md:p-2.5">
                        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                    </div>
                    <h2 className="text-xl my-2 text-[#11324D] font-medium md:text-2xl">
                        <AlbumIcon /> Preview
                    </h2>
                    <p className="text-[#143c5c] rounded-r-md p-1.5 shadow-md shadow-[#11324D]/50 bg-clip-padding border border-solid border-teal-400 md:text-base md:p-2.5">{text.length > 0 ? text : "Nothing to Preview!"}</p>
                </div>
            </div>

        </div>
    );
}

export default Homepage;