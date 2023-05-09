import Notiflix from "notiflix";
import {countriesList, countryInfo, clearContent} from "./index.js"
let status
export function fetchCountries(name){
    const URL = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    return fetch(URL)
    .then(response =>{
        if(response.ok){
            return response.json()
        } else{
            Notiflix.Notify.failure("Oops, there is no country with that name")
            status = response.status
            return status
        }   
    })
    .catch(err => {
        console.error(err);
        throw err
    })
}