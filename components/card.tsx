import "@/styles/card.sass";

export function Card({
  title,
  content,
  direct = null,
}: {
  title: string;
  content: string;
  direct: { name: string; url: string } | null;
}) {
  let titleEl = title.split("\n");
  let buttonBox = null;
  if (direct !== null) {
    buttonBox = (
      <span className="card-direct">
        <a href={direct.url}>
          <div className="align-center">
            <p>{direct.name}</p>
            <svg
              className="arrow"
              width="70"
              height="61"
              viewBox="0 0 70 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 30.5H68M68 30.5L39 1M68 30.5L39 60" strokeWidth="2" />
            </svg>
          </div>
        </a>
      </span>
    );
  }
  return (
    <div className="card">
      <div className="card__container">
        <p className="card-title">{title}</p>
        <p className="card-content">{content}</p>
      </div>
      {buttonBox}
    </div>
  );
}
