import { useEffect } from 'react'
import axios from 'axios'
import authFetch from '../axios/custom'
const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const rep = await authFetch('/react-store-products')

      const rep2 = await axios(randomUserUrl)
    } catch (e) {}

    console.log('custom axioss instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
