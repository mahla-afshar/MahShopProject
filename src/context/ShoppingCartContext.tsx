import {createContext,useState , useContext} from "react";


interface IShoppingCartProvider{
    children:React.ReactNode;
}
interface ICartItem{
    id:number,
    qty: number
}

interface  IShoppingCartContext{
    cartItems:ICartItem[]
}


// export const ShoppingCartContext =createContext<IShoppingCartContext>({
//     cartItems:[]
// })     mishe be jaye in in payini ro nevesht

export const ShoppingCartContext =createContext({} as IShoppingCartContext)    

// این جا این رو یه هوک کردیم
export const useShoppingCartContext =() =>{
    return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider ({children}:IShoppingCartProvider){
    const [cartItems, setCartItems] = useState<ICartItem[]>([])
 return(
    <ShoppingCartContext.Provider value={{cartItems}}>
     {children}

    </ShoppingCartContext.Provider>
 )   
}
