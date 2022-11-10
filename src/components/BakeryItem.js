// TODO: create a component that displays a single bakery item

export default function BakeryItem({nameProp, priceProp, desciptionProp, prop2, 
    imageProp, updateCart}){

    return(
        <div>
            <img style={{width: '20vw', marginTop:'3rem'}} src={imageProp} 
            alt={nameProp.name}/>
            <br></br>
            {prop2} {nameProp.name} {priceProp.price} {desciptionProp.description}
            <br></br>
            <button onClick={()=> updateCart(nameProp.name, priceProp.price)}>Add to Cart</button>
        </div>


       
    )
}