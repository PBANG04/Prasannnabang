import { useState, useEffect } from "react";
import React from "react";


function Pagination() {

    let [b, setb] = useState([])
    let [currentpage, setcurrentpage] = useState(1)
    let itemsperpage = 5;

    async function fetchh() {
        let a = await fetch("https://fakestoreapi.com/products");
        let data = await a.json();
        setb(data)


    }

    useEffect(() => {
        fetchh();
    }, [])

    const paginate = (array, pagesize, pagenumber) => {
        return array.slice((pagenumber - 1) * pagesize, pagenumber * pagesize)
    }

    const currentitems = paginate(b, itemsperpage, currentpage);


    let page = [];

    for (let i = 1; i <= (b.length / itemsperpage); i++) {
        page.push(i);
    }

    function handlepagechange(pages) {
        setcurrentpage(pages)

    }





    return (
        <>
            <div>



                <div>


                    {currentitems.map((ele, index) => (
                        <div>
                            <p>{ele.title}</p>
                        </div>
                    ))}


                </div>
                {page.map((pages, index) => (
                    <span>
                        <button onClick={() => handlepagechange(pages)}>{pages}</button>
                    </span>
                ))}

            </div>
        </>
    )
}
export default Pagination