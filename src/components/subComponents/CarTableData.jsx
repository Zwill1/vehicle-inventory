import { useState } from 'react'
import useFetch from '../../assets/data/useFetch.js';

function CarTableData({AddSearch}) {
    console.log("this is the search" ,AddSearch);
    const {data, loading, error, refetchData} = useFetch('src/assets/data/CAR_DATA3.js');

    const [vehicleName, setVehicleName] = useState("");
    const [imageVehicle, setImageVehicle] = useState("");
    const [vehicleDesc, setVehicleDes] = useState("");
    const [vehiclePrice, setVehiclePrice] = useState("");
  
    if (loading) return <h1>LOADING...</h1>
  
    if(error) console.log(error);
  
    console.log(data);
  
    function vehicleSetting(e){
      e.preventDefault();
      console.log(data[Number(e.target.id) - 1]);
      console.log(data[Number(e.target.id) - 1].car_brand);
      setVehicleName(data[Number(e.target.id) - 1].car_selected);
  
      vehicleSetImage(e);
      vehicleSetDesc(e);
      vehicleSetPrice(e);
    }
    function vehicleSetImage(e){
      console.log(data[Number(e.target.id) - 1].car_image);
      setImageVehicle(data[Number(e.target.id) - 1].car_image);
    }
    function vehicleSetDesc(e){
      console.log(data[Number(e.target.id) - 1].car_description);
      setVehicleDes(data[Number(e.target.id) - 1].car_description);
    }
    function vehicleSetPrice(e){
      console.log(data[Number(e.target.id) - 1].car_price);
      setVehiclePrice(data[Number(e.target.id) - 1].car_price);
    }

  return (
    <>
        <section className='container mx-auto pt-2 pb-2 grid grid-cols-1 lg:grid-cols-1'>
        <div className='w-full hidden lg:block'>
            {!vehicleName == '' && 
                <p className='text-center text-2xl'>You have selected: <span className='font-semibold italic'>{vehicleName}</span></p>
            }
            </div>
        </section>
        <section className='container mx-auto pb-3 grid grid-cols-2 lg:grid-cols-2'>
            <div className='w-full'>
                <p>
                    {!imageVehicle == '' && 
                    <img className='text-center' src={imageVehicle} alt={`Photo of ${vehicleName}`} />
                }
                </p>
            </div>
            <div className='w-full p-5'>
                <h2 className='text-center font-bold text-4xl'>{vehicleName}</h2>
                <h4 className='text-center font-semibold italic text-2xl'>{vehiclePrice}</h4>
                <div>
                    {!vehicleDesc == '' && 
                        <p>{vehicleDesc}</p>
                }
                </div>
            </div>
        </section>
        <section className='container mx-auto pb-3 grid grid-cols-1 lg:grid-cols-1'>
            <table className="table-auto border-collapse border border-slate-500 w-full">
                <thead>
                    <tr>
                    <th className='border border-slate-600 bg-gray-800 text-white'>Brand</th>
                    <th className='border border-slate-600 bg-gray-800 text-white'>Model</th>
                    <th className='border border-slate-600 bg-gray-800 text-white'>Year</th>
                    <th className='border border-slate-600 bg-gray-800 text-white'>Price</th>
                    <th className='border border-slate-600 bg-gray-800 text-white'>Status</th>
                    </tr>
                </thead>
                <tbody>
                {data?.filter((item) => {
                        return AddSearch.toLowerCase() === '' ? item : item.car_brand.toLowerCase().includes(AddSearch);
                    }).map((item) => (
                        <tr key={item.id}>
                        <td className='border border-slate-700 bg-gray-200 text-center'>{item.car_brand}</td>
                        <td className='border border-slate-700 bg-gray-200 text-center'>{item.car_model}</td>
                        <td className='border border-slate-700 bg-gray-200 text-center'>{item.car_year}</td>
                        <td className='border border-slate-700 bg-gray-200 text-center'>{item.car_price}</td>
                        <td className='border border-slate-700 bg-gray-200 text-center'>
                            <button 
                            id={item.id} 
                            className='button-table' 
                            onClick={vehicleSetting}>View Vehicle</button>
                        </td>
                        </tr>
                    ))}                  
                </tbody>
            </table>
        </section>
        <section className='container mx-auto pb-3 grid grid-cols-1 lg:grid-cols-1'>
            <button onClick={refetchData}>Refresh Table Data</button>
    </section>
    </>
  )
}

export default CarTableData