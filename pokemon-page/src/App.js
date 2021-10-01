import './App.css';
import data from './data/pokemonData';
import Pokemon from './Pokemon'

function App() {
  return (
    <div className="App">
      {data.map(p => {
        return (
          <Pokemon
            title={p.name.english}
            type={p.type.length > 1 ? `${p.type[0]}/${p.type[1]}` : `${p.type[0]}`}
            description={p.description}
            image={p.image}
          />
        )
      })}
    </div>
  );
}

export default App;
