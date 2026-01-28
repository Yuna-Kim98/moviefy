import Layout from "./layout/Layout";
import Contents from "./components/Contents";

import './style.css'

export default function App() {
  return (
    <Layout>
      <p>컨텐츠</p>
      <Contents />
    </Layout>
  );
}
