import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <AppStyle>
      <Home />
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  overflow: hidden;
`;
