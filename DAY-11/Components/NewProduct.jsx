import ProductDate from "./ProductDate";
import ProductForm from "./ProductForm";

function NewProduct(props){
    function saveProduct(product){
        console.log("i am inside new product");
        console.log(product);

        props.print(product);
    }

    return <div>
        <ProductForm onSaveProduct={saveProduct}/>
    </div>

}

export default NewProduct;