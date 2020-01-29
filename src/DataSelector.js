import React from "react";
import styled from "styled-components";
export default props => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20%;
  `;
  const lessDataUrl =
    "https://gist.githubusercontent.com/kochewww/fad7e42987ffff2127f2598054be6cfe/raw/cfacf5dbbed9ac6e75c8fb72d9c1ce771e13c0a5/smalldata.json";
  const moreDataUrl =
    "https://gist.githubusercontent.com/kochewww/5e2bc44ac9a519083729a2dd11a7e6ec/raw/3d6e9e6309370349b369aae970bfd2bf9ceb0c02/bigdata.json";
  return (
    <Wrapper>
      <button
        onClick={() => props.onChoose(lessDataUrl)}
        type="button"
        className="btn btn-primary"
        style={{ marginRight: "20px" }}
      >
        Less amount of data
      </button>
      <button
        onClick={() => props.onChoose(moreDataUrl)}
        type="button"
        className="btn btn-secondary"
      >
        More amount of data
      </button>
    </Wrapper>
  );
};
