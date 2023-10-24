"use client";

import { useState } from "react";

export default function NewItem() {
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemCategory, setItemCategory] = useState("produce");

    const handleNameChange = (event) => {
        setItemName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setItemQuantity(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setItemCategory(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name: itemName,
            quantity: itemQuantity,
            category: itemCategory
        }
        console.log(item);

        alert("Item Name: " + itemName + "\nQuantity: " + itemQuantity + "\nCategory: " + itemCategory);
        setItemName("");
        setItemQuantity(1);
        setItemCategory("produce");
    }

    return (
        <main className="bg-blue-600 p-5">
            <div className="text-center">
                <form>
                    <label className="block mb-2">
                        <span className="text-white">Item Name:</span>
                        <input type="text" value={itemName} onChange={handleNameChange} required className="text-black ml-2"/>
                    </label>
                    <label className="block mb-2">
                        <span className="text-white">Quantity:</span>
                        <input type="number" min={1} max={99} value={itemQuantity} onChange={handleQuantityChange} required className="text-black ml-2"/>
                    </label>
                    <label className="block mb-4">
                        <span className="text-white">Category:</span>
                        <select value={itemCategory} onChange={handleCategoryChange} className="text-black ml-2">
                            <option value="produce" className="text-black">Produce</option>
                            <option value="dairy" className="text-black">Dairy</option>
                            <option value="meat" className="text-black">Meat</option>
                            <option value="bakery" className="text-black">Bakery</option>
                            <option value="frozen foods" className="text-black">Frozen Foods</option>
                            <option value="canned goods" className="text-black">Canned Goods</option>
                            <option value="dry goods" className="text-black">Dry Goods</option>
                            <option value="beverages" className="text-black">Beverages</option>
                            <option value="snacks" className="text-black">Snacks</option>
                            <option value="household" className="text-black">Household</option>
                            <option value="other" className="text-black">Other</option>
                        </select>
                    </label>
                    <button onClick={handleSubmit} className="py-2 px-4 bg-blue-800 hover:bg-blue-400 rounded-md text-white">Submit</button>
                </form>
            </div>
        </main>
    )
}
