const c = (el)=>{ return document.querySelector(el); };
const cs = (el)=>{ return document.querySelectorAll(el); };

pizzaJson.map((item, index)=>{
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);
    // Preencher as informações em pizza-item

    c('.pizza-area').append(pizzaItem);
});