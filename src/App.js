import PageDetails from "./components/PageDetails/PageDetails";
import PlanList from "./components/PlanList/PlanList";

function App() {
  return (
    <>
      <PageDetails 
        title="Pricing"
        description="Quickly build your empire using this beautifully designed pricing table built with default MUI components"
      />
      <PlanList />
    </>
  );
}

export default App;
