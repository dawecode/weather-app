import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CityComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const WeatherComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
      PRACTICE
      <CityComponent>City </CityComponent>
      <WeatherComponent>Weather</WeatherComponent>
    </Container>
  );
}

export default App;
