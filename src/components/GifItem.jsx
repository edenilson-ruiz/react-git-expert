export const GifItem = ({ title, url}) => {
  return (
    <div className="card">
      <div className="card__image-container">
        <img src={url} />
      </div>
      <div className="card__content">
        <p className="card__title text--medium">
          { title }
        </p>
        <div className="card__info">
          <p className="text--medium"></p>
        </div>
      </div>
    </div>
  );
};
