"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import './styles.css'

export default function homepage() {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((data) => { setData(data.data) }).catch(error => console.log(error));
    }, [])
    console.log(data)
    return (
        <div className="grid-container">

            {data.map((e, i) => (
                <div className="grid-item" key={i}>
                    <img src={e.image} className="productImage" />

                    <div>
                        <p className="productTitle">{e.title}</p> <br /><br />
                        <p className="productRating">ratings:{e.rating.rate}</p><br />
                        <p className="productPrice">Price :{e.price}</p>
                    </div>
                    <div>
                        <br />
                        <br />
                        <button className="addtocart">Add to Cart</button>
                    </div>

                </div>
            ))}



        </div>
    )
}