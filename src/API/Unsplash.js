import axios from "axios"

export default axios.create({

  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eGToj35yBR4yDFXc02relEuPlSsKj2gqxEtg8djX63A'
  }
})