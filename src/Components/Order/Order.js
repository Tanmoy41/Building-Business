import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsRemove, fetchProductsSelect } from '../../redux/index';

const Order = () => {
    const { productId } = useParams();
    let product = useSelector((state) => state.product)
    const { image, title, description, price, category } = product;
    const dispatch = useDispatch();

    const fetchProductDetails = (id) => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                const product = response.data
                dispatch(fetchProductsSelect(product))
            })
    }

    useEffect(() => {
        if (productId && productId !== "") {
            fetchProductDetails(productId)
        }
        return () => {
            dispatch(fetchProductsRemove());
        }
    }, [productId])

    const ShowAlert = () => {
        alert("Successfully Added")
    }

    return (
        <Container>
            {
                Object.keys(product).length === 0 ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="row d-flex align-items-center py-3">
                        <div className="col-md-6 col-sm-6 col-12 p-5">
                            <img src={image} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 px-5">
                            <h3>{title}</h3>
                            <h5 className="text-muted">{category}</h5>
                            <p>{description}</p>
                            <p>$ {price} </p>
                            <Button variant="primary" onClick={() => ShowAlert()}>Add to Cart</Button>
                        </div>
                    </div>
                )
            }
        </Container>
    );
};

export default Order;
