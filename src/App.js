import "./App.scss";
import PageDetails from "./components/PageDetails/PageDetails";
import PlanList from "./components/PlanList/PlanList";

function App() {
  return (
    <main className="app">
      <PageDetails 
        title="Pricing"
        description="Quickly build your empire using this beautifully designed pricing table built with default MUI components"
      />
      <PlanList />
    </main>
  );
}

export default App;
