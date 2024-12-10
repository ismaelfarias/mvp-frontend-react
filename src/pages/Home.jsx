import Images from "../components/Images";
import PageTitle from "../components/PageTitle";
import dados from "../dados.json";

const Home = () => {
  return (
    <>
      <PageTitle title="NOVIDADES" />
      <Images products={dados.products.filter(product => product.new === "S")}/>
    </>
  );
};

export default Home;
