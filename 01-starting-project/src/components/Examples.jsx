import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
  const [activeTab, setActiveTab] = useState();
  function handleSelect(selectedButton) {
    setActiveTab(selectedButton);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={activeTab === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={activeTab === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          Jsx
        </TabButton>
        <TabButton
          isSelected={activeTab === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={activeTab === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!activeTab && <p>Please click on a tab!</p>}
      {activeTab && (
        <div id="tab-content">
          <h3>{EXAMPLES[activeTab].title}</h3>
          <p>{EXAMPLES[activeTab].description}</p>
          <pre>
            <code>{EXAMPLES[activeTab].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
