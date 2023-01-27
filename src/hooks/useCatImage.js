import { useEffect, useState } from 'react'
import { getWordFromSentence } from '../use-case'

export const useCatImage = ({ fact }) => {
  const [url, setUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    fetch(import.meta.env.VITE_CAT_ENDOPOINT_IMG + getWordFromSentence(fact) + '?json=true')
      .then(res => res.json())
      .then(data => setUrl(`${import.meta.env.VITE_CAT_URL_IMG}${data?.url}`))
  }, [fact])

  return {
    url
  }
}
