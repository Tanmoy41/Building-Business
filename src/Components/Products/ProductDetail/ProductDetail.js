import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetail = ({ product }) => {
    const { id, title, image, price, category } = product;
    return (
        <div className="col-md-3 col-sm-6 col-12 pb-3">
            <Link to={`/product/${id}`}>
                <Card>
                    <Card.Img variant="top" src={image} className="img-fluid" style={{ height: '300px' }} />
                    <Card.Body>
                        <Card.Title style={{ height: '50px', overflow: 'hidden' }}>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                        <Card.Text>$ {price} </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default ProductDetail;
