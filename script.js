let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

//------------------------------- Cats Facts-------------------------------// 
btn1.addEventListener("click",async ()=>{
    let store = await Getcatfacts();
    one.children[1].textContent = store;
})

let Getcatfacts = async ()=>{
    try{
        let response = await axios.get(url1)
        return response.data.fact;
    }
    catch(e){
        console.log(`error - ${e}`);
        return "Fact No Found";
    }
}
//------------------------------- Dog photos -------------------------------// 

btn2.addEventListener("click",async ()=>{
    let link = await Getdogpics();
    two.children[1].setAttribute("src",link);
})




let Getdogpics = async ()=>{
    try{
        let response = await axios.get(url2);
        return response.data.message;
    }
    catch(e){
        console.log(`error - ${e}`);
        return "Fact No Found";
    }
}