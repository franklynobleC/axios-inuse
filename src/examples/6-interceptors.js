import { useEffect } from 'react'
import authFetch from '../axios/interceptors'
const url = 'https://course-api.com/react-store-products'

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch('/ssreact-store-products')
    } catch (error) {
      // console.error(error.response)
      if (error.response.status === 404) {
        //write logic
        console.log('NOT FOUND --------------------')
      }
      return Promise.reject(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>interceptors</h2>
}
export default Interceptors
