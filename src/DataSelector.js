import React from "react";
import styled from "styled-components";
export default props => {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20%;
  `;
  const lessDataUrl =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  const moreDataUrl =
    "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
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
