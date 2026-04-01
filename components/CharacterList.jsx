export default function CharacterList({ personajes }) {
    return (
        <div className="personajes-list">
            {personajes.map(personajes => (
                <div key={personajes.id} className="personajes-card">
                    <h1>Personajes de Rick and Morty</h1>
                    <img src={personajes.image} alt={personajes.name} />
                    <h3>{personajes.name}</h3>
                    <p>Status: {personajes.status}</p>
                </div>
            ))}
        </div>
    );
}
