import styles from "./styles.module.css";

interface Props {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

const Card = ({ id, name, price, description, img }: Props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <figure>
        <img onClick={() => window.location.href = img} src={img} className={styles.img} />
      </figure>
      <div className={styles.price}>
        <h2>R$ {price}</h2>
      </div>
      <button className={styles.btn}>COMPRAR</button>
    </div>
  );
};

export default Card;
