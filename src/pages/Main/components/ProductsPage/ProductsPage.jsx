import Table from "components/Table/Table";
import { getAll as getAllProducts } from "api/Products";
import { useState, useEffect } from "react";


const ProductPage = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts({ count: 4, page: 1 })
            .then(res => setProducts(res?.data?.products || []))
            .catch(err => console.log(err))
    }, [])
    const columns = [{ title: 'Products'}]

    console.log(products)

    return <div className="products-page">
        <Table columns={columns} data={products}/>
    </div>
}

export default ProductPage;