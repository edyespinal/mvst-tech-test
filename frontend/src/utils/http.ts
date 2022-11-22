import axios from 'axios'

function getBaseUrl() {
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    // reference for render.com
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`

  // assume localhost
  return process.env.BASE_URL || 'http://localhost:3000'
}

axios.defaults.baseURL = getBaseUrl()

export const http = axios
