import React,{useState} from "react";
import { connect } from "react-redux";
import {addProduct} from '../actions/products';

const ProductForm =({addProduct})=> {

    const [productName, setProductName] = useState("");
    const [selectedOption, setSelectedOption] = useState("szt");
    const [productQuantity, setProductQuantity] = useState(0);


    const onSubmit = (e) =>{
        e.preventDefault();
        const product = {
            name:productName,
            quantity:productQuantity,
            units:selectedOption,
            bought:false,
        }
        addProduct(product);
        clearForm();
    }

    const clearForm = () =>{
        setProductName("");
        setSelectedOption("szt");
        setProductQuantity(0);
    }

    return (
        <form 
            className="grid-x form_product"
            onSubmit={onSubmit}
        >
            <div className="cell small-12 large-9">
                <label>Nazwa produktu
                <input 
                    type="text" 
                    placeholder="Wprowadź nazwę produktu" 
                    value={productName}
                    onChange={(e)=>setProductName(e.target.value)
                }/>
                </label>
            </div>
            <div className="cell small-6 large-1">
                <input 
                    type = "number" 
                    placeholder="Ilość" 
                    value ={productQuantity} 
                    onChange={(e)=>setProductQuantity(e.target.value)}
                />
            </div>
            <div className ="cell small-6 large-1">
                <select 
                    value={selectedOption} 
                    onChange={(e)=>setSelectedOption(e.target.value)}
                >
                    <option value="szt">szt</option>
                    <option value="ml">ml</option>
                    <option value="litr">litr</option>
                    <option value="dag">dag</option>
                    <option value="kg">kg</option>
                </select>
            </div>
            <input 
                type="submit" 
                className="button button_form cell small-12 large-1" 
                value="Dodaj" 
                disabled={!productName}
            />
        </form>
    )   
}


export default connect(null,{addProduct})(ProductForm)
