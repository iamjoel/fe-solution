import axios from 'axios'
import {getStr as getStr2} from './utils'

export const fetchDog = () => {
  return new Promise(resolve => {
    // https://dog.ceo/dog-api/
    axios.get('https://dog.ceo/api/breeds/image/random').then(({data: {message}}) => {
      resolve(message)
    })
  })
}

export const createDog = () => {
  return new Promise(resolve => {
    axios.post('https://dog.ceo/api/breeds/image/random').then(({data: {message}}) => {
      resolve(message)
    })
  })
}

export const getStr = getStr2
