import Card from '../../ui/Card';

const AvailableProducts = ({ pro, selectedProducts, setSelectedProducts }) => {

    return (
        <div className='grid space-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4'>
            {
                pro.map(product => {

                    const handleBuyNow = () => {
                        setSelectedProducts([...selectedProducts, product]);
                    }
                    const isProductAdded = selectedProducts.some(item => item.id === product.id);
                    return (
                        <Card key={product.id}
                            isProductAdded={isProductAdded}
                            handleBuyNow={handleBuyNow}
                            product={product}
                            selectedProducts={selectedProducts}
                            setSelectedProducts={setSelectedProducts}
                        />
                    )
                })
            }
        </div>
    )
};

export default AvailableProducts;