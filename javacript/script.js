document.querySelector('#submitButton').addEventListener("click", function(){
    const a= Number(document.querySelector('#num1').value);
    const b= Number(document.querySelector('#num2').value);
    if(a > b){
        document.querySelector('#result').textContent="A IS GREATER"
    }
    else{
        document.querySelector('#result').textContent="b IS greater"
    }
});
