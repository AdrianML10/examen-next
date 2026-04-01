"use client"
import CharacterCard from '@/components/CharacterCard';
import { useState, useEffect } from 'react';
export default function Home() {
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    async function llamarApi() {
      try {
        const respuesta = await fetch("https://rickandmortyapi.com/api/character")
        const data = await respuesta.json()
        console.log(data)
        setPersonajes(data.results)
      } catch (error) {
        console.error(error)
      }
    }
    llamarApi()
    return (
      < div className='bg-amber-200'>
        {personajes.map((personaje) => (
          <CharacterCard key={personaje.id} personajes={personaje} />
        ))}
      </div>
    );
  })
}
