import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [result, setResult] = useState({});

    useEffect(() => {
        axios.get('http://localhost:4000//search-location/weather/524901')
            .then((res) => {
                console.log(res)
                setResult(res.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <h1>This is page1.jsx</h1>
            <div>
                {Object.entries(result).map(([key, value], index) => (
                    <h2 key={index}>{`${key}: ${value}`}</h2>
                ))}
                {Object.entries(result)}
            </div>
        </>
    );
}
