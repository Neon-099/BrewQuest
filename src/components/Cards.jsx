import { useState } from "react";



const Cards = ( {title, img, description, link, price} ) => {
    const [isLong, setIsLong ] = useState(false);
    const limit = 88;

    //WORD BASED
    const word = description.split("");

    //CHECK IF WE NEED TO SEE MORE
    const isLongText = word.length > limit;
    const displayedText = isLong ? description : word.slice(0, limit).join('') + (isLongText ? '...' : '');

    return (
        <div className="my-10 h-96 flex flex-col mb-30"> {/*NEED TO SET A MAX HEIGHT FOR EVERY CARD (including...)*/}
            <img
                className="rounded-lg shadow-md w-80 h-100 object-cover mx-auto"
                src={img}
                alt="" />
            <p className="py-3 font-semibold">{title}</p>
            <p className="text-[#96734F] text-sm py-4">{displayedText}</p>
            {isLong && (
                <button 
                    onClick={() => setIsLong(!isLong)}
                     className="text-blue-500 hover:underline mt-1"
                    >
                    {isLong ? "See Less" : "See More"}
                </button>
            )}
            <p className="text-md text-[#96734F]">{price}</p>
        </div>
    )
}

export default Cards;