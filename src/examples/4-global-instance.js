import { useEffect } from 'react'
import axios from 'axios'
const productsUrl = 'https://course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const resp = await axios(productsUrl)
      const resp1 = await axios(randomUserUrl)
      console.log(resp)
      console.log(resp1)
    } catch (e) {
      console.log(e.message)
    }

    console.log('global axios instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>global instance</h2>
}
export default GlobalInstance
