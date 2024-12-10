import PageTitle from "../components/PageTitle";
import Images from "../components/Images";
import dados from "../dados.json";

const Aneis = () => {
  return (
    <>
      <PageTitle title="ANEIS" />
      <Images products={dados.products.filter(product => product.category === 2)} />
    </>
  );
};

export default Aneis;
