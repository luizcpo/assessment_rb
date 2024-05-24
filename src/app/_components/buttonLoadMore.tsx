"use client";
import Link from "next/link";

interface ButtonLoadMoreProps {
  handleClick: () => void;
}

const ButtonLoadMore: React.FC<ButtonLoadMoreProps> = ({ handleClick }) => {
  return (
    <Link onClick={handleClick} href="#">
      Load more
    </Link>
  );
};

export default ButtonLoadMore;
