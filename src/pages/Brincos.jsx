import PageTitle from "../components/PageTitle";
import Images from "../components/Images";
import dados from "../dados.json";

const Brincos = () => {
    return (
        <>
        <PageTitle title="BRINCOS" />
        <Images products={dados.products.filter(product => product.category === 1)} />
      </>
    )
}

export default Brincos;