import { CORE_CONCEPTS, EXAMPLES } from "./data";
import { useState } from "react";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  const [activeTab, setActiveTab] = useState();
  function handleSelect(selectedButton) {
    setActiveTab(selectedButton);
  }

  return (
    <div id="app" data-testid="app">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={activeTab === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={activeTab === "jsx"} onSelect={() => handleSelect("jsx")}>Jsx</TabButton>
            <TabButton isSelected={activeTab === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={activeTab === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!activeTab && <p>Please click on a tab!</p>}
          {activeTab && <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>{EXAMPLES[activeTab].code}</code>
            </pre>
          </div>}
        </section>
      </main>

    </div>
  );
}

export default App;