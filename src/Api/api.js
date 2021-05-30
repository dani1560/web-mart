import { products } from '../data/products'

export const getProductId = (id) => {

    return products.find(product => product.id === Number(id));
}

export const getVisibleProducts = (selectedCategory, selectedRating, selectedPrice) => {

    if (selectedCategory.length === 0 && selectedRating === 0 && selectedPrice[0] === 0 && selectedPrice[1] === 1000) {

        return products;
    }
    else {

        return (
            products.filter(product => {
                if (selectedCategory.length !== 0 && selectedRating !== 0 && (selectedPrice[0] !== 0 || selectedPrice[1] !== 1000)) {
                    return (selectedCategory.includes(product.category) && product.rating == selectedRating &&
                        (product.price >= selectedPrice[0] && product.price <= selectedPrice[1]));
                }
                else if (selectedCategory.length !== 0 && selectedRating !== 0) {
                    return selectedCategory.includes(product.category) && product.rating == selectedRating
                }
                else if (selectedCategory.length !== 0 && (selectedPrice[0] !== 0 || selectedPrice[1] !== 1000)) {
                    return selectedCategory.includes(product.category) && (product.price >= selectedPrice[0] && product.price <= selectedPrice[1])
                }
                else if (selectedRating !== 0 && (selectedPrice[0] !== 0 || selectedPrice[1] !== 1000)) {
                    return product.rating == selectedRating && (product.price >= selectedPrice[0] && product.price <= selectedPrice[1])
                }
                else if (selectedCategory.length !== 0) {
                    return selectedCategory.includes(product.category)
                }
                else if (selectedRating !== 0) {
                    return product.rating == selectedRating
                }
                else if (selectedPrice[0] !== 0 || selectedPrice[1] !== 1000) {
                    return product.price >= selectedPrice[0] && product.price <= selectedPrice[1]
                }
                // else{
                //     return product;
                // }
                // else{
                //     return ( selectedRating !=== 0 || selectedPrice[0] !=== 0 || selectedPrice[1] !=== 1000) &&
                //    ( selectedCategory.includes(product.category) || product.rating === selectedRating ||
                //     product.price >= selectedPrice[0] && product.price <= selectedPrice[1]));
                // }


            }
            )
            // (   (selectedCategory.length !=== 0 && selectedRating !=== 0) || 
            //     (selectedCategory.length !=== 0 &&  (selectedPrice[0] !=== 0 || selectedPrice[1] !=== 1000)) || 
            //     (selectedRating !=== 0 && (selectedPrice[0] !=== 0 || selectedPrice[1] !=== 1000)) ) 
            //     ?
            //     selectedCategory.includes(product.category) && product.rating === selectedRating 
            //     :
            //     (selectedCategory.length !=== 0 || selectedRating !=== 0 || selectedPrice[0] !=== 0 || selectedPrice[1] !=== 1000) &&
            //     selectedCategory.includes(product.category) || product.rating === selectedRating ||
            //     (product.price >= selectedPrice[0] && product.price <= selectedPrice[1])
            //     )
        );

    }
}