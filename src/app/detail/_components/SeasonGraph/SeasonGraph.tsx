import { mostVotedOptionInfo } from "@/types/res/perfumeDetail";
import React from "react";
import styled from "@emotion/styled";

type Props = {
  infoData: mostVotedOptionInfo;
};

const SeasonGraph = ({ infoData }: Props) => {
  return (
    <S.Wrapper>
      <S.ImgWrap>
        <img
          src={`/assets/images/evaluation-options/${infoData.optionCode}.png`}
          alt={`${infoData.optionName} 이미지`}
        />
      </S.ImgWrap>
      <S.BarGraph>
        <div
          style={{
            width: `${infoData.votePercent}%`,
            backgroundColor: `${"red"}`,
          }}
        ></div>
      </S.BarGraph>
    </S.Wrapper>
  );
};

export default SeasonGraph;

const Wrapper = styled.div``;

const ImgWrap = styled.div`
  position: relative;
  width: 4.8rem;
  margin-bottom: 0.6rem;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

const BarGraph = styled.div`
  position: relative;
  width: 100%;
  height: 0.6rem;
  border-radius: 0.3rem;
  background: #eee;
  overflow: hidden;

  div {
    height: 100%;
    border-radius: 0.3rem;
  }
`;

const S = {
  Wrapper,
  BarGraph,
  ImgWrap,
};
