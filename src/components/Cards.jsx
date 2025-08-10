

const Cards = ( {title, img, description, link,} ) => {
    return (
        <div className="my-10 h-96 flex flex-col mb-30"> {/*NEED TO SET A MAX HEIGHT FOR EVERY CARD (including...)*/}
            <img
                className="rounded-lg shadow-md w-80 h-100 object-cover "
                src={img}
                alt="" />
            <p className="py-3 font-semibold">{title}</p>
            <p className="text-[#96734F] text-sm">{description}</p>
        </div>
    )
}

export default Cards;