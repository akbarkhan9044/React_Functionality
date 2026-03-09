import { useEffect, useState } from "react"

const PaginationProduct=({data})=>{
 const [pageNumber,setPageNumber]=useState(1);
    const itemPerPage=10;
    const NumberOfPageButton=Array.from({length:
        Math.floor(data.length/itemPerPage)
    },(_,i)=>`${i+1}`);
    console.log(NumberOfPageButton);
    const dataPerPage=data.slice(
        (pageNumber-1)*itemPerPage,
           (pageNumber-1)*itemPerPage+itemPerPage,
    )


    return(
        <div>Pagination
            {dataPerPage.map((item)=>(
                <div>
                    {item.title}
                </div>
            ))}
    {NumberOfPageButton && NumberOfPageButton.map((item)=>(
        <button 
        onClick={()=>{setPageNumber(Number(item))}}
        key={item}>{item}</button>
    ))}
        </div>
    )
}

export default function Pagination(){
    const [products,setProducts]=useState([]);
    const fetchData=async()=>{
        const data=await fetch('https://dummyjson.com/products?limit=500');
        const resp=await data.json();
        setProducts(resp.products);
        console.log(resp.products);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div>
           {products &&( <PaginationProduct 
            data={products}
            />
            )}
        </div>
    )
}