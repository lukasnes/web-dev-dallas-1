import axios from "axios";

const orderCookies = async (evt) => {
    evt.preventDefault();

    const formData = {
        cookieType: document.querySelector("#cookie-type-field").value,
        qty: document.querySelector("#qty-field").value
    }
    // console.log(formData)

    try{
        const response = await axios.post('/order-cookies', formData)

        console.log(response)
    
        document.querySelector('#order-status').innerText = response.data.msg
        document.querySelector('#order-total').innerText = response.data.totalPrice
    }catch (err){
        console.log(err)
    }


}

document.querySelector('#order-form').addEventListener('submit', orderCookies)