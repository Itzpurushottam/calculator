let btn= document.getElementsByClassName("btn");
let display= document.getElementById("display");
let string="";

Array.from(btn).forEach((element) =>
{
    element.addEventListener("click", (e)=>  
    {
        let val=e.target.innerHTML;
        if(val=="=")
        {
            string = eval(string);
            display.value=string;

        }else if(val == "c")
        {
            string=""; 
            display.value =string;
            

        }
        else{
            string = string+val;
            display.value=string;
        }
    })
}
)
