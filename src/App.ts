import axios from 'axios';
import GoogleGeocodingResponse from './types/GoogleGeocodingResponse';

const API_KEY = process.env.API_KEY;
const formElement = document.querySelector('form') as HTMLFormElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const googleMapsScript = document.createElement('script');

googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
document.head.append(googleMapsScript);

function addressLookUpHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${API_KEY}`)
    .then((response) => {
      let {
        data: { status, results },
      } = response as GoogleGeocodingResponse;
      if (status !== 'OK') {
        throw new Error('Could not fetch data from API');
      }
      if (results) {
        const coordinates = results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
          center: coordinates,
          zoom: 12,
        });
        new google.maps.Marker({ position: coordinates, map: map });
      }
    })
    .catch((error) => {
      alert(error.message);
      console.log(error);
    });
}

// @ts-ignore
const formListener = formElement.addEventListener('submit', addressLookUpHandler);
