import React from "react";
import { render } from "react-dom";
import { Div, Span, FlexRow, FlexColumn } from "../../src";

const Demo = () =>
  <div>
    <Div color="blue" fontSize={20}>This is a div with some style</Div>
    <Div marginTop={10}>
      This is a <Span color="red">div</Span> with some{" "}
      <Span fontStyle="italic">spans</Span> inline
    </Div>
    <FlexRow marginTop={20}>
      <Div fontColor="cyan" marginRight={20}>This the first element in a flex row</Div>
      <Div>And <Span fontWeight="bold">another</Span> element</Div>
    </FlexRow>
    <FlexColumn marginTop={20}>
      <div>First element in a flex column</div>
      <div>Second element</div>
    </FlexColumn>
  </div>;

render(<Demo />, document.querySelector("#demo"));
