import ItemList from "./item-list";

export default function Page(){
    return(
        <main class="bg-gray-950">
            <h1 class="text-3xl font-bold m-2">
                Shopping List
            </h1>
            <ItemList/>
        </main>
    )
}