import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar></ProjectsSidebar>
      <NewProject></NewProject>
      <NoProjectSelected></NoProjectSelected>
    </main>
  );
}

export default App;