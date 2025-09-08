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


// {
//     id: "6821bc9e09ab2e00019aa5d1",
//     imageId:
//       "NI_CATALOG/IMAGES/CIW/2025/5/14/43e3c412-4ca9-4894-82ba-24b69da80aa6_06c0d2a9-804c-4bf1-8725-7ebd234e144a",
//     action: {
//       link: "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh Vegetables",
//       text: "Fresh Vegetables",
//       type: "DEEPLINK",
//     },
//     accessibility: {},
//     entityId: "6821bc9e09ab2e00019aa5d1",
//     frequencyCapping: {},
//     externalMarketing: {},
//     description: "Fresh Vegetables",
//     overlayIcon: {},
//   }