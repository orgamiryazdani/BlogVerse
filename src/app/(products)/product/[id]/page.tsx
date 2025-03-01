const Product = async ({ params }: { params: { id: string } }) => {
    const productId = parseInt(await params.id) || 1

    return <div>{productId}</div>
}

export default Product
