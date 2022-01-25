import React from 'react'
import './ZodiacCard.css'

export default function ZodiacCard({ name, dates }) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
return (
  <div>
    <img alt={name} src={`${process.env.PUBLIC_URL}/images/${name}.png`} />
  <span>{name}</span>
  <span>{dates}</span>
  </div>
)
}
