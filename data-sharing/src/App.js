import { useEffect, useState } from "react";
import ProductCard from "./productCard";


const App = () => {
    const [city, setCity] = useState([]);
    async function TourAPI() {
        try {
            const response = await fetch("https://course-api.com/react-tours-project");
            const data = await response.json();
            console.log(data);
            setCity(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        TourAPI()
    }, [city]);

    return (
        <>
            <ul>
                {city.map((c, index) => {
                    <li>
                        <ProductCard key={c.id} c={city} />
                    </li>
                })}
            </ul>
        </>
    );
};
export default App;
