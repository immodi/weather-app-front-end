import { useRef } from "react"
import locationSvg from "./assets/location.svg"

function Header({ setData, setCityObject, setCity, getData, data }) {
    const citiesList = useRef(null)
    const cities = data.map((city, index) => {
        return (
            <li
                key={index}
                className="city-card relative bg-slate-200 text-sm md:text-base text-center flex content-center justify-around items-center list-none h-16 rounded-sm mt-1 mb-1 pr-2 md:pr-0 cursor-pointer transition-all"
                onClick={() => {
                    getData(setCityObject, setData, city.name, "full")
                }}
            >
                <div className="relative flex content-center justify-around items-center w-fit h-full">
                    <img src={locationSvg}
                        alt="Location SVG"
                        className="w-6 h-6 relative m-3"
                    />
                    <span>{city.name} - {city.iso}</span>
                </div>
                
            </li>
        )
    })
    
    return (
        <header className="w-full bg-black relative h-16 p-4">
            <span className="text-lg md:text-xl text-white absolute left-5 md:left-10">Today's Weather</span>
            <input
                type="text"
                id="cityInput"
                name="city"
                className="absolute right-5 md:right-10 p-1 w-1/2 rounded-sm"
                onChange={(e) => {
                    setCity(e.target.value)
                    citiesList.current.style.visibility = "visible"
                }}
                onFocus={() => {
                    citiesList.current.style.visibility = "visible"
                }}
                onBlur={() => {
                    citiesList.current.style.visibility = "hidden"
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter")
                    {
                        getData(setCityObject, setData, e.target.value, "full")
                        citiesList.current.style.visibility = "hidden"
                    }
                    
                }}
            />
            <ul ref={citiesList} className="cities-list absolute w-1/2 right-5 md:right-10 top-14">{cities}</ul>
        </header>
    )
}
export default Header
