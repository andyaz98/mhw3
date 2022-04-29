
function search_flights_for_destination_1(json) {
    
    const access_token = json.access_token;
    fetch(AMADEUS_API_SEARCH_ENDPOINT+DESTINATION_1_LOCATION_CODE+"&departureDate="+DEPARTURE_DATE+"&adults=1&nonStop=false&max=1", {
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }
    ).then(onResponse).then(add_flights_for_destination_1);
}

function search_flights_for_destination_2(json){
    const access_token = json.access_token;
    fetch(AMADEUS_API_SEARCH_ENDPOINT+DESTINATION_2_LOCATION_CODE+"&departureDate="+DEPARTURE_DATE+"&adults=1&nonStop=false&max=1", {
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }
    ).then(onResponse).then(add_flights_for_destination_2);
}

function search_flights_for_destination_3(json){
    const access_token = json.access_token;
    fetch(AMADEUS_API_SEARCH_ENDPOINT+DESTINATION_3_LOCATION_CODE+"&departureDate="+DEPARTURE_DATE+"&adults=1&nonStop=false&max=1", {
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }
    ).then(onResponse).then(add_flights_for_destination_3);
}

function search_flights_for_destination_4(json){
    const access_token = json.access_token;
    fetch(AMADEUS_API_SEARCH_ENDPOINT+DESTINATION_4_LOCATION_CODE+"&departureDate="+DEPARTURE_DATE+"&adults=1&nonStop=false&max=1", {
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }
    ).then(onResponse).then(add_flights_for_destination_4);
}

function search_flights_for_destination_5(json){
    const access_token = json.access_token;
    fetch(AMADEUS_API_SEARCH_ENDPOINT+DESTINATION_5_LOCATION_CODE+"&departureDate="+DEPARTURE_DATE+"&adults=1&nonStop=false&max=1", {
        headers: {
            "Authorization": "Bearer " + access_token
        }
    }
    ).then(onResponse).then(add_flights_for_destination_5);
}

function add_flights_for_destination_1(json){
    PARAGRAPH_1.textContent="Voli a partire da: "+json.data[0].price.total+"€";
}

function add_flights_for_destination_2(json){
    PARAGRAPH_2.textContent="Voli a partire da: "+json.data[0].price.total+"€";
}

function add_flights_for_destination_3(json){
    PARAGRAPH_3.textContent="Voli a partire da: "+json.data[0].price.total+"€";
}

function add_flights_for_destination_4(json){
    PARAGRAPH_4.textContent="Voli a partire da: "+json.data[0].price.total+"€";
}

function add_flights_for_destination_5(json){
    PARAGRAPH_5.textContent="Voli a partire da: "+json.data[0].price.total+"€";
}


setTimeout(request_token_1,0);
setTimeout(request_token_2,1500);
setTimeout(request_token_3,3000);
setTimeout(request_token_4,4500);
setTimeout(request_token_5,6000);


function request_token_1(){
    console.log("requesting token 1");

    fetch(AMADEUS_API_TOKEN_REQUEST, {
        method: "post",
        body: "grant_type=client_credentials&client_id=" + AMADEUS_API_CLIENT_ID + "&client_secret=" + AMADEUS_API_CLIENT_SECRET,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(onResponse).then(search_flights_for_destination_1);

}

function request_token_2(){
    console.log("requesting token 2");

    fetch(AMADEUS_API_TOKEN_REQUEST, {
        method: "post",
        body: "grant_type=client_credentials&client_id=" + AMADEUS_API_CLIENT_ID + "&client_secret=" + AMADEUS_API_CLIENT_SECRET,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(onResponse).then(search_flights_for_destination_2);

}

function request_token_3(){
    console.log("requesting token 3");

    fetch(AMADEUS_API_TOKEN_REQUEST, {
        method: "post",
        body: "grant_type=client_credentials&client_id=" + AMADEUS_API_CLIENT_ID + "&client_secret=" + AMADEUS_API_CLIENT_SECRET,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(onResponse).then(search_flights_for_destination_3);

}

function request_token_4(){
    console.log("requesting token 4");

    fetch(AMADEUS_API_TOKEN_REQUEST, {
        method: "post",
        body: "grant_type=client_credentials&client_id=" + AMADEUS_API_CLIENT_ID + "&client_secret=" + AMADEUS_API_CLIENT_SECRET,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(onResponse).then(search_flights_for_destination_4);

}

function request_token_5(){
    console.log("requesting token 5");

    fetch(AMADEUS_API_TOKEN_REQUEST, {
        method: "post",
        body: "grant_type=client_credentials&client_id=" + AMADEUS_API_CLIENT_ID + "&client_secret=" + AMADEUS_API_CLIENT_SECRET,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        }
    }).then(onResponse).then(search_flights_for_destination_5);

}






