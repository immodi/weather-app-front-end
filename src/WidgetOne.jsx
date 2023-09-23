function CloudSvg() {

  return (
    <div className="mt-1 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 w-24 h-24">
        <svg
          className="w-24 h-24 scale-75 md:scale-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      </div>
  )
}

function WidgetOne({ cityObject }) {
  
  return (
    <div className="flex flex-col w-full h-72 bg-white origin-center top-5 rounded-xl p-4 pb-72 mb-10 md:mb-4">
      <div className="font-bold text-base md:text-xl">{cityObject["name"]}</div>
      <div className="text-xs text-gray-500">{cityObject["date"]}</div>
      <CloudSvg></CloudSvg>
      <div className="flex flex-row items-center justify-center relative bottom-4 md:mt-5 ml-2">
        <div className="font-medium text-3xl">{cityObject["temperature"]}°C</div>
      </div>
      <div className="md:flex md:flex-row md:justify-between grid grid-cols-2 gap-5 grid-rows-2 mt-2 md:mt-6">
        <div className="flex flex-col items-center">
          <div className="font-medium text-xs md:text-sm">Wind</div>
          <div className="text-xs md:text-sm text-gray-500">
            {cityObject["windspeed"]}k/h
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-xs md:text-sm">Elevation</div>
          <div className="text-xs md:text-sm text-gray-500">
            {cityObject["elevation"]}m
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-xs md:text-sm">Wind Direction</div>
          <div className="text-xs md:text-sm text-gray-500">
            {cityObject["winddirection"]}%
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-medium text-xs md:text-sm">Timezone</div>
          <div className="text-xs md:text-sm text-gray-500">{cityObject["timezone"]}</div>
        </div>
      </div>
    </div>
  );
}

export default WidgetOne;
