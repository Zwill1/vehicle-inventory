import { useState, useEffect } from "react";
import Loader from '../subComponents/Loader';
import ErrorMessage from "./ErrorMessage";

const API_URL = "src/Services/apiCars.js"

function CarCard() {

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchCars() {
    try{
        setIsLoading(true);
        setError("");
        const res = await fetch(`${API_URL}`);
    
        if(!res.ok) {
          throw new Error("Something went wrong with fetching car data");
        }
    
        const data = await res.json();
        setCars(data);

    } catch(err) {
      console.error("this is the error message in catch", err.message);
      setError(err.message);
    } finally{
      setIsLoading(false);
    }
  }
  fetchCars();
}, []);

  console.log('this is the car state ', cars);

  return (
    <>

    {/* {isLoading ? <Loader /> : cars?.filter((item) => {return item.car_year > 2005}).map((item) => ( */}

    {isLoading && <Loader />}

    {!isLoading && !error && cars?.filter((item) => {return item.car_year > 2005}).map((item) => (

      <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden m-2">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={item.car_image}
            alt="Card image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {item.car_selected}
        </div>
          <p className="mt-2 text-gray-700">{item.car_price}</p>
          <p className="mt-2 text-gray-700">{item.car_year}</p>
        </div>
      </div>
      </div>

    ))}

    {error && <ErrorMessage message={error} /> }

    </>
  )
}

export default CarCard