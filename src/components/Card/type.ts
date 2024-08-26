export type CardProps = {
  title: string;
  id: number;
  image: string;
  family: string;
  genus: string;
  onLike: () => void;
  onDelete: () => void;
}