const Product = async ({ params }: { params: { id: number } }) => {
    const productId = (await params.id) || 1

    return <div>{productId}</div>
}

export default Product
