export default function CharacterCard({ personajes }) {
    return (
        <div className="character-card">
            <h1>{personajes.id}</h1>
            <img src={personajes.image} alt={personajes.name} />
            <h2>{personajes.name}</h2>
            <p>Status: {personajes.status}</p>
            <p>species: {personajes.species}</p>
        </div>
    );
}