"use client";
import { useState } from "react";
import Item from "./item";
import items from "./items.json"

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name"); 
    
    const sortItems = () => {
        if(sortBy === "name"){
            return items.sort((a,b) => a.name.localeCompare(b.name));
        } else if(sortBy === "category"){
            return items.sort((a,b) => a.category.localeCompare(b.category));
        }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Verdana, sans-serif'}}>
            <h1 style={{fontSize: '26px', margin: '15px 0', color: '#2C3E50'}}>Sorting Options:</h1>
            <div style={{display: 'flex', gap: '10px'}}>
                <button 
                    onClick= {() => setSortBy("name")} 
                    style={{padding: '10px 20px', backgroundColor: '#E74C3C', border: 'none', borderRadius: '5px', color: '#FFFFFF', cursor: 'pointer'}}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#C0392B'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#E74C3C'}
                >
                    Name
                </button>
                <button 
                    onClick={() => setSortBy("category")}
                    style={{padding: '10px 20px', backgroundColor: '#3498DB', border: 'none', borderRadius: '5px', color: '#FFFFFF', cursor: 'pointer'}}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#2980B9'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#3498DB'}
                >
                    Category
                </button>
            </div>

            <ul style={{margin: '20px 0', padding: '30px', listStyleType: 'circle'}}>
                {sortItems().map((item) => (
                    <li key={item.id} style={{color: '#34495E'}}>
                        {item.name} - {item.category}
                    </li>
                ))}
            </ul>
        </div>
    )
}
