import axios from 'axios';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsSet } from '../../../redux/index';
import ProductDetail from '../ProductDetail/ProductDetail';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                const products = response.data
                dispatch(fetchProductsSet(products))
            })
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);
    return (
        <div className="my-5">
            <Container>
                <h1 className="text-center">Our Products</h1>
                <div className="row p-5">
                    {
                        products.map(product => <ProductDetail key={product.id} product={product} ></ProductDetail>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Product;
