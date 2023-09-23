import { useEffect, useState } from "react"
import WidgetOne from "./WidgetOne"
import WidgetTwo from "./WidgetTwo";
import Header from "./Header"
import axios from "axios"

function App() {
  const [data, setData] = useState([])
  const [city, setCity] = useState("")
  const [cityObject, setCityObject] = useState(null)

  useEffect(() => {
    getData(setCityObject, setData, "Cairo, Egypt", "full")
  }, [])
  
  useEffect(() => {
    getData(setCityObject, setData, city, "par")
  }, [city])

  return (
    <>
      <Header setData={setData} setCityObject={setCityObject} setCity={setCity} getData={getData} data={data}></Header>
      {cityObject !== null ?
        <div className="h-fit bg-slate-100 w-screen min-h-min flex flex-col content-center items-center justify-between p-10 relative md:right-2 rounded-xl">
          <WidgetOne cityObject={cityObject}></WidgetOne>
          <WidgetTwo cityObject={cityObject}></WidgetTwo>
        </div>
        :
        undefined
      }
    </>
  )
}

const getData = async (setCityObject, setData, cityName, fullDataBool) => {
  const response = await axios.get("https://weatherapi12.pythonanywhere.com/api", {
    params: {
      city: cityName,
      full_data: fullDataBool,
    },
  })
  let cities = response.data
  if (fullDataBool === "full") {
    setCityObject(cities)
  } else {
    setData(cities)
  }
}

export default App
