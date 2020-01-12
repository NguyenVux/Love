let vertical =  0;
let horizon = 0;

function RotateY()
{
    if(horizon !== 0)
    {
        horizon *= -1;
    }
    else
    {
        horizon = 1;
    }
    vertical = 0;
}

function RotateX()
{
    if(vertical !== 0)
    {
        vertical *= -1;
    }
    else
    {
        vertical = 1;
    }
    horizon = 0;
}
function Stop()
{
    vertical = 0;
    horizon = 0;
}

let d =$(".cube");
let degH = -25;
let degV = 0;
const angle = 1;
setInterval(()=>
{
    if(horizon !== 0)
    {
        degH+=angle*horizon;
        //d.style = `transform: rotateY(${deg}deg)`;
    }
    if(vertical !==0)
    {
        degV+=angle*vertical;
        
        //d.style = `transform: rotateX(${deg}deg)`;
        
    }
    d.attr("style",`transform: rotateY(${degV}deg) rotateX(${degH}deg)`);

    
},10);