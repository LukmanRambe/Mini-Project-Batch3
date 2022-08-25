import Layout from "../../components/home/Layout";
import Todos from "../../components/home/Todos";

const Home = () => {
  return (
    <Layout title="Mini Project Vocasia - Dashboard">
      <Todos Header="To Do Today" />
    </Layout>
  );
};

export default Home;
