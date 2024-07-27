import Particle from "./components/Particle";
import ParticleFrame from "./components/ParticleFrame";
import "./styles.css";

function App() {
  return (
    <>
      <ParticleFrame numParticles={20} radius={1} />
      <h1>Particles.jsx</h1>
    </>
  );
}

export default App;
