
const myButton = document.querySelector('.postKey');
const myPostInput = document.querySelector("[name='myPostInput']");
const myContentInput = document.querySelector("[name='myInput']");

let createMessage = function(event){
    event.preventDefault();
    // event.stopPropagation();
    let key = myPostInput.value;
    console.log(key);
    axios.post("http://circuslabs.net:3000/data/" + key, {
        "type":"string",
        "content":myContentInput.value
    })
    .then(function (response) {
        console.log('here is the response data for key:', response);
        console.log('here is the data response data for key:', response.data);
        console.log('here is the data response data for key:', key);
    })
    .catch(function (error) {
        console.warn('axios encountered an error!', error);
    }); 
}

//make a POST response

//make a GET response

// axios.get("http://circuslabs.net:3000/data/" + key)
//     .then(function (response) {
//         console.log('here is the get response data for key:', response);
//         console.log('here is the get data response data for key:', response.data);
//     })
//     .catch(function (error) {
//         console.warn('axios encountered an error!', error);
//     }); 

myButton.addEventListener("click", createMessage, false);