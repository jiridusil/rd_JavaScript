import { Link } from "react-router-dom";

export const Homepage = () => {
    return (
        <>
            <div style={{ fontSize: '24px' }}>This is homepage</div>
            <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                <Link to='/product-list' style={{ color: 'inherit', textDecoration: 'none' }}>Go to Product List</Link>
            </button>
            <button style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                <Link to='/add-product' style={{ color: 'inherit', textDecoration: 'none' }}>Add New Product</Link>
            </button>
        </>
    )
};