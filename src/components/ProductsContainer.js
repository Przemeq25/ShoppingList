import React from 'react';
import { connect } from 'react-redux';
import { removeProduct,toggleStatusProduct } from '../actions/products';

const ProductsContainer =({products,removeProduct,toggleStatusProduct})=> {

    const createTableRow = products.map(product=>(
        <tr key={product.name}>
          <td>
            <div className="switch small margin">
              <input className="switch-input" id={product.name} type="checkbox" value={products.bought} onChange={()=>toggleStatusProduct(product.name)}/>
              <label className="switch-paddle" htmlFor={product.name}>
                <span className="show-for-sr"></span>
              </label>
            </div>
          </td>
          <td className={product.bought && "strikeout"}>{product.name}</td>
          <td className={product.bought && "strikeout"}>{product.quantity}</td>
          <td className={product.bought && "strikeout"}>{product.units}</td>
          <td>
              <button className=" margin button " onClick={()=>removeProduct(product.name)}>Usun</button>
          </td>
        </tr>
    ));

    return (
        <div>
        {!products.length ? 
            <div className="grid-x grid-padding-x align-center">
                <h1><small>Nie posiadasz żadnej listy zakupowej</small></h1>
            </div> 
        :
            <table>
                <thead>
                    <tr>
                        <th width="5%"></th>
                        <th width="70%">Nazwa</th>
                        <th width="10%">Ilość</th>
                        <th width="5%">Jednostka</th>
                        <th width="5%"></th>
                    </tr>
                </thead>
                <tbody 
                    className="align-center"
                >
                    {createTableRow}
                </tbody>
            </table>
        }
        </div>
    )
}
const mapStateToProps = state =>({
    products: state.products.products
  })

export default connect(mapStateToProps,{removeProduct,toggleStatusProduct})(ProductsContainer);
