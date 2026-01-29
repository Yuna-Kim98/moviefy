import Layout from "./layout/Layout";
import MovieRanking from "./components/MovieRanking";

import './style.css'

export default function App() {
  return (
    <Layout>
      <p>컨텐츠</p>
      <MovieRanking />
    </Layout>
  );
}
