function Card({name, description, price, stock, image, category}) {
    return (
        <div className="flex flex-wrap justify-center">
            <p className="w-full">{name}</p>
            <img src={image} />
            <p className="w-full">{price}</p>
        </div>
    );
}

export default Card