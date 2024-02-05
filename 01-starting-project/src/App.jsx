import { CORE_CONCEPTS } from "./data";

function CoreConcept({ title, image, desc }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <Header />
      <main>
        <section id="core-concepts">
          <ul><CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>

    </div>
  );
}

export default App;