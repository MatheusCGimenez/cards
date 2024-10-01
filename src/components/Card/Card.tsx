import styles from "./styles.module.css";

interface Props {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Card = ({ id, name, price, description }: Props) => {
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
