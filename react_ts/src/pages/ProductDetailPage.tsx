import { Link, useLoaderData } from "react-router-dom";

type Params = Record<string, string | undefined>;

export const productDetailLoader = async ({ params }: { params: Params }) => {
    return { id: params.id };
}

export const ProductDetailPage = () => {
    const { id } = useLoaderData() as Params;

    return (
        <>
            <Link to='/product-list' style={{ color: 'white', textDecoration: 'none', padding: '10px 20px', backgroundColor: '#007bff', borderRadius: '5px', display: 'inline-block' }}>Go to Product List</Link>
            <div style={{ fontSize: '24px' }}>This is produt detail page with productID = {id}</div>
        </>
    )
};