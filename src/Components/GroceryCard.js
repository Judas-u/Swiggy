


export default function GroceryCard({foodData}) {
    return (
        <>
            <div className="flex flex-col text-xl font-medium"> 
                <a href={foodData?.action.link}>  
                <img 
                    className="w-40 h-50  object-cover " 
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}>
                </img>
                <h1>{foodData?.action?.text}</h1>
                </a>
            </div>
        </>
    )
}