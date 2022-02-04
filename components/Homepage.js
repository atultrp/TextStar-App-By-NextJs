import { useState } from "react";
import ShortTextIcon from '@material-ui/icons/ShortText';
import AlbumIcon from '@material-ui/icons/Album';

const Homepage = () => {

    const handleUpClick = () => {
        // console.log("Button is clicked!");
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
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <div className="mx-60 my-5">
            <h1 className="text-4xl my-2 text-[#11324D] font-medium">Enter the text to analyze below <ShortTextIcon fontSize="large" /> </h1>
            <textarea cols="30" rows="10" className="form-control block w-full px-3 py-1.5 text-base font-normal text-[#11324D] bg-white bg-clip-padding border border-solid border-teal-400 rounded transition ease-in-out m-0 focus:text-gray-700 :bg-white focus:border-teal-900 focus:outline-none shadow-md shadow-[#11324D]/50" value={text} onChange={handleOnChange}></textarea>
            <div>
                <button class="bg-[#143c5c] hover:bg-[#11324D] text-white font-bold py-2 px-4 rounded-xl mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" onClick={handleUpClick}>Uppercase</button>

                <button class="bg-[#143c5c] hover:bg-[#11324D] text-white font-bold py-2 px-4 rounded-xl mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" onClick={handleLowClick}>Lowercase</button>

                <button class="bg-[#143c5c] hover:bg-[#11324D] text-white font-bold py-2 px-4 rounded-xl mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

                <button class="bg-[#143c5c] hover:bg-[#11324D] text-white font-bold py-2 px-4 rounded-xl mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" onClick={handleCopy}>Copy Text</button>

                <button class="bg-[#143c5c] hover:bg-[#11324D] text-white font-bold py-2 px-4 rounded-xl mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="my-3">
                <h2 className="text-xl my-2 text-[#11324D] font-medium"><AlbumIcon/> Your text summary!</h2>
                <div className="text-[#143c5c] ml-7">
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                </div>
                <h2 className="text-xl my-2 text-[#11324D] font-medium"><AlbumIcon/> Preview</h2>
                <p className="text-[#143c5c] ml-7">{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </div>
    );
}

export default Homepage;