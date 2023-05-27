import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  return (
    <div className="container">
      <h3>{category}</h3>
      {isLoading && <h2> Cargando ...</h2>}
      <hr />
      <main>
        <section className="cards">
          {images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))}
        </section>
      </main>
    </div>
  );
};
