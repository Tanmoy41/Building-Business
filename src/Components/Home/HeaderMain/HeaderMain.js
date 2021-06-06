import React from 'react';
import { Button } from 'react-bootstrap';

const HeaderMain = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-white text-center">
                <h1>Find your Products</h1>
                <Button variant="primary">Shop Now</Button>
            </div>
        </div>
    );
};

export default HeaderMain;
