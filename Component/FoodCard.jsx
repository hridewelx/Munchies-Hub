export default function FoodCard({data}) {
    return(
        <div>
            <a href={data?.action?.link}>
                <img className="w-36 h-45 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt={data?.action?.text} />
            </a>
        </div>
    )
}