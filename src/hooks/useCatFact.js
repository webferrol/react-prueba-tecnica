import { useState, useEffect } from 'react'
import { getCatFact } from '../use-case/getUseFact'

export const useCatFact = () => {
  const [fact, setFact] = useState('')

  const refreshFact = async () => {
    try {
      const fact = await getCatFact()
      setFact(fact)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return {
    fact,
    refreshFact
  }
}
