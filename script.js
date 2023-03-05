let string=""
let btns=document.querySelectorAll('.btn')
// btns.addEvent 
btns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML)
        if(e.target.innerHTML=="="){
            try{
                let flag=0;
                for(let i in string){
                    if(string[i]=='^'){
                        let num1=0;
                        let num2=0;
                        // console.log(string.length)
                        // console.log("j")
                        for(let j =0;j<i;j++){
                            // console.log(j)
                            num1=num1*10+Number(string[j]);

                        }
                        // console.log("d")
                        for(let d =string.length-1;d>i;d--){
                            // console.log(d)
                            num2=10*num2+Number(string[d]);

                        }
                        // console.log(num1, num2)
                        string=num1**num2;
                        document.querySelector('input').value=string;
                        console.log(string)
                        flag=1;
                    }
                }
                if(flag==0){
                    string =eval(string);
                    document.querySelector('input').value=string;
                    console.log(string)
                }
            }
            catch(error){
                console.log(error)
                string="Error"
                document.querySelector('input').value=string;
                // console.log(string)
            }
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            document.querySelector('input').value=string;
            console.log(string)

        }
        else if(e.target.innerHTML=='←'){
            string=string.slice(0,string.length-1);
            document.querySelector('input').value=string;
            console.log(string)

        }
        
        else{
            string+=e.target.innerHTML;
            console.log(string)
            // let ip=document.querySelector('input')
            // console.log(ip)
            document.querySelector('input').value=string;
        }

    })
})