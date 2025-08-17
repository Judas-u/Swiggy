export default function DineCard({ RestData }) {
  return (
    <div className="max-w-sm flex-none">
        <a href="https://www.swiggy.com/restaurants/815465/dineout"> 
      <div className="relative">
        {/* Restaurant Image */}
        <img
          className="w-80 h-[200px] object-cover rounded-2xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            RestData?.info?.mediaFiles?.[0]?.url
          }
          alt={RestData?.info?.name}
        />

        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>

        {/* Restaurant name & rating */}
        <p className="absolute bottom-2 left-2 text-lg font-semibold text-white">
          {RestData?.info?.name}
        </p>
        <p className="absolute bottom-2 right-2 text-lg font-semibold text-white">
          ⭐ {RestData?.info?.rating?.value}
        </p>
      </div>
      </a>
    </div>
  );
}
