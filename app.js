(function(){
    let num = "";
    const displayItem = document.querySelector(".answer-plate");
    document.querySelectorAll('button[data-num]').forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            num +=""+e.target.value;
            displayCalcData(num.trim());
        })
    });
    document.querySelectorAll("button[data-control]").forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            if(num.charAt(num.length-1) !== e.target.value){
                num+=e.target.value;
                displayCalcData(num.trim());
            }
        })
    });
    document.querySelector(".equal").addEventListener('click', ()=> {
        if(num.length !== 0){
            num = calculate(num).toString();
        }
    });
    document.querySelector("button[data-clear]").addEventListener('click',()=> {
        displayCalcData("");
        num = "";
    });
    document.querySelector("button[data-cl]").addEventListener('click',()=> {
        num = num.substring(0, num.length - 1)
        displayCalcData(num)
    })
    function displayCalcData(data){
        if(data === "Infinity"){
            setTimeout(()=> {
                displayCalcData("");
            },3000)
        }
        displayItem.innerText = data;
    }

    function calculate(data){
        let answer;
        try{
            answer = eval(data.replace("÷","/").trim());
            if(answer % 1 !== 0){
                displayCalcData(answer.toFixed(3));
            }else{
                displayCalcData(answer);
            }
        }catch(e){
            displayCalcData(e.name);
            setTimeout(()=>{
                displayCalcData("");
                num="";
            }, 3000);
        }
        return answer;
    }
})();