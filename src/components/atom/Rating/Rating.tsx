"use client";

import { FC, useState } from "react";
import styled from "@emotion/styled";
import RatingComponent from "@/components/atom/Rating/RatingComponent";

const MAX_RATING = 5;

export type PropTypes = {
  onChange?: (rating: number) => void;
  disabled?: boolean;
  precision: number;
  size?: number;
  initialValue?: number;
};

const defaultSize = 40;

const Rating: FC<PropTypes> = ({
  initialValue = 0,
  onChange,
  disabled,
  precision,
  size = defaultSize,
}) => {
  const [rating, setRating] = useState(initialValue);

  const onChangeCallback = (value: number, index: number) => {
    const rating = index + value;
    setRating(rating);
    onChange?.(rating);
  };

  return (
    <S.Wrapper size={size}>
      {[...Array(MAX_RATING)].map((_, idx) => {
        const normalizedRating = Math.floor(rating);
        const currentStart = normalizedRating === idx;
        const isLowerPosition = normalizedRating > idx;
        const initialValue = currentStart
          ? rating - idx
          : isLowerPosition
            ? 1
            : 0;
        return (
          <RatingComponent
            key={idx}
            index={idx}
            size={size}
            onChange={onChangeCallback}
            disabled={disabled}
            precision={precision}
            initialValue={initialValue}
          />
        );
      })}
    </S.Wrapper>
  );
};
export default Rating;

const Wrapper = styled.div<{ size: number }>`
  display: inline-grid;
  grid-template-columns: repeat(${MAX_RATING}, ${({ size }) => size}px);
  padding: 10px;
  gap: 5px;
`;

const S = {
  Wrapper,
};