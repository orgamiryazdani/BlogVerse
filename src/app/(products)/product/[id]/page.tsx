const Product = ({ params }: { params: { id: string } }) => {
    const productId = parseInt(params.id) || 1

    return <div>{productId}</div>
}

export default Product
