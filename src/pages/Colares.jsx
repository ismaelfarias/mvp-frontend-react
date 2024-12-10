import PageTitle from "../components/PageTitle";
import Images from "../components/Images";
import dados from "../dados.json";

const Colares = () => {
    return (
        <>
        <PageTitle title="COLARES" />
        <Images products={dados.products.filter(product => product.category === 3)} />
      </>
    )
}

export default Colares;