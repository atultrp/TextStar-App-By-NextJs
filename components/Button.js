export default function Button({ handleClick, buttonTitle, backColor }) {

    return (
        <button
            className={`${backColor} text-white font-semibold p-1 rounded-r-md mr-3 mt-4 transition ease-in hover:-translate-y-1 hover:scale-110 duration-200 shadow-md shadow-[#11324D]/50 md:p-2`} onClick={handleClick}>
            {buttonTitle}
        </button>

    );
}