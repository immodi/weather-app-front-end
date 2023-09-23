import cloudSvg from "./assets/cloud.svg";
import sunSvg from "./assets/sun.svg";

function Svg({ svgSrc, dimension=32 }) {
  return <img src={svgSrc} width={dimension} height={dimension} />;
}

function WaterDropSvg({ percentage=12 }) {
  return (
    <div className="flex items-center justify-end md:pr-10">
      <span className="font-semibold">{percentage}%</span>
    <svg
      className="w-6 h-6 fill-current ml-1"
      viewBox="0 0 16 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1,0,0,1,-4,-2)">
        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" />
      </g>
    </svg>
  </div>
  )
}

function WidgetTwo({ cityObject }) {
  const dates = Array.from(cityObject["past_forcast_dates"]);
  const maxTemps = Array.from(cityObject["past_forcast_max"]);
  const minTemps = Array.from(cityObject["past_forcast_min"]);
  const precProp = Array.from(cityObject["precipitation_probability_max"]);
  const weatherCodes = Array.from(cityObject["weathercode"]);

  return (
    // <div className="flex flex-col space-y-6 h-fit w-full max-w-screen-lg absolute bottom-5 bg-white p-4 rounded-xl">
    <div className="flex flex-col w-full md:w-8/12 h-fit bg-white text-xs md:text-sm origin-center rounded-xl p-4">
    {dates.map((date, index) => {
        return (
          <div key={index} className="inline-flex justify-between items-center mt-1 mb-1">
            <span className="font-semibold w-2/4 mr-4">{date}</span>
            <WaterDropSvg percentage={precProp[index]}></WaterDropSvg>
            <div className="h-8 md:h-6 inline-flex items-center justify-end w-1/4 md:pr-10"></div>
            <Svg svgSrc={[1, 2, 3].includes(weatherCodes[index]) ? sunSvg : cloudSvg} dimension={24}></Svg>
            <span className="font-semibold w-1/2 text-right ml-4">
              {minTemps[index]}° / {maxTemps[index]}°
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default WidgetTwo;
