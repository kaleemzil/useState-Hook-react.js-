import React , {useState} from 'react';


function Component(){

    const [name,  setName] = useState("Guest");
    const [Age,  setAge] = useState(0);
    const [isEmployed , setIsEmployed] = useState(false);



 const updateName = ()=>{
        setName("kaleemullah");
 }

 const updateAge = ()=>{
    setAge(Age + 1 );
}
const toggleFunction = ()=>{
    setIsEmployed(!isEmployed);
}





    return(

        <>
            <div>
                        <p> Name : {name} </p>
                        <button onClick={updateName}> Set Name </button>


                        <p> Age : {Age} </p>
                        <button onClick={updateAge}> Incerment Age </button>
                        
                        
                        <p> Is Employed : {isEmployed ? "yes" : "No"} </p>
                        <button onClick={toggleFunction}> Toggle boolean </button>
            </div>
        </>
    )
}

export default Component