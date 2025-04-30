import ProductModel from "../Models/productModel.js"

const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()

        if (!products) {
            return res.json({ success: false, message: "No products found" })
        }

        return res.json({ success: true, products })

    } catch (error) {
        console.log(error)
    }
}

export { getProducts }