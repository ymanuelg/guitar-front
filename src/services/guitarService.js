const URL_GUITAR_BASE = 'http://localhost:1234/guitar'

export const getAllGuitar = async () => {
  try {
    const response = await fetch(URL_GUITAR_BASE)
    if (!response.ok) {
      throw new Error('Error retrieving guitar data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error ('Error retrieving guitar data', error.message)
  }
}
