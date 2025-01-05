import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";

function App() {
  return (
    <main className="min-h-screen grid place-content-center bg-neutral-50 text-center">
      <div className="space-y-5 max-w-[500px]">
        <MovieInput />
        <MovieList />
      </div>
    </main>
  );
}

export default App;
