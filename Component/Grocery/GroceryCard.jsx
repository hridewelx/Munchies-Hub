export default function GroceryCard({data}) {
    return (
        <div>
            <a href={data?.action?.link}>
                <img className="w-36 h-45 object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${data?.imageId}`} alt={data?.action?.text} />
                <div className="w-36 mt-3 font-bold text-xl text-center">{data?.description}</div>
            </a>
        </div>
    )
}