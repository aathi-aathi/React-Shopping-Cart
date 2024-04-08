import React, { useState } from "react";
import data from "..assets/data.json";
 
export const Cart=()=>{
    const [products]=useState(data)
    console.log(products)
}