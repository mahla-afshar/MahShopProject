import React, { ComponentProps } from 'react'

type TVariant = "primary" | "secoundary" | "danger" | "warning" |"success" 

type TButton =ComponentProps<"button"> & {
    variant? : TVariant
    // variant : "primary" | "secoundary" | "danger" | "warning" |"success"  //union type
   
}  

// این rest  برای اینه که ما همه اتریبیوت های اصلی کامپوننت رو بگیریم 
function Button({children,  variant ,style,...rest}: TButton) {

    // console.log(checkVariant(variant))
  return (
    <button {...rest} style={{borderRadius:"6px" ,padding:"4px 8px",...style,...checkVariant(variant)}}>
      {children}
    </button>
  )
}

export default Button

function checkVariant(variant?: TVariant){
  if(variant === "primary"){
    return {backgroundColor:"#388bff" , color :"white"};
}
else if(variant === "secoundary"){
    return {backgroundColor:"gray" , color :"black"} ;
}
else if(variant === "danger"){
    return {backgroundColor:"red" , color :"white"} ;
}
else if(variant === "warning"){
    return {backgroundColor:"yellow" , color :"white"} ;
}
else if(variant === "success"){
    return {backgroundColor:"green" , color :"white"} ;
}
}
