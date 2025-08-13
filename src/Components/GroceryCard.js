export default function GroceryCard({ foodData }) {
    return (
        <div className="flex-none text-xl font-medium">
            <a 
                href={foodData?.action.link} 
                className="flex flex-col items-center text-center"
            >
                <img
                    className="w-[160px] h-[200px] object-cover rounded-md"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}
                    alt={foodData?.action?.text}
                />
                <h1 className="mt-2">{foodData?.action?.text}</h1>
            </a>
        </div>
    );
}
