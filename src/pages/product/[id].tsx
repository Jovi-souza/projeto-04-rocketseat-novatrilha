import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return(
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>
      <ProductDetails>
        <h1>Camisseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio placeat, cupiditate reprehenderit sint voluptas qui quae repellendus recusandae obcaecati accusantium eligendi hic illo ad minima pariatur suscipit rerum sapiente nulla.</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
