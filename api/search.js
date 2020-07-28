import { getCharacter } from 'rickmortyapi'

export default async (req, res) => {
  const { name = 'Morty' } = req.query
  const response = await getCharacter({ name })
  console.log('RESPONSE', response)
  if (!response || !response.results || response.results.length === 0) {
    res.status(404).send('Character not found')
  } else {
    res.json(response.results)
  }
}