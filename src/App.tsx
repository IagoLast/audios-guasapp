import Audio from "components/Audio";
import "./App.css";

function App() {
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1> 😂 Audios Guasap 😂 </h1>
      </header>
      <main
        style={{
          maxWidth: "530px",
          margin: "auto",
        }}
      >
        <Audio
          duration="3:49"
          src="/media/dani_ardeume_o_bmw.mp3"
          title="Ardeume o BMW"
        />
        <Audio
          duration="1:12"
          src="/media/estoy_to_perdido.mp3"
          title="Estoy to perdido"
        />
      </main>
    </>
  );
}

export default App;
