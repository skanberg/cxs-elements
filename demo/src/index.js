import React from "react";
import { render } from "react-dom";
import {
  Div,
  Span,
  FlexRow,
  FlexColumn,
  A,
  Table,
  TableRow,
  TableCell,
} from "../../src";

const Demo = () =>
  <div>
    <Div color="blue" fontSize={20}>
      This is a div with some style
    </Div>
    <Div marginTop={10}>
      This is a <Span color="red">div</Span> with some{" "}
      <Span fontStyle="italic">spans</Span> inline
    </Div>
    <FlexRow marginTop={20}>
      <Div color="gray" marginRight={20}>
        This is the first element in a flex row
      </Div>
      <Div>
        And <Span fontWeight="bold">another</Span> element
      </Div>
    </FlexRow>
    <FlexColumn marginTop={20}>
      <div>First element in a flex column</div>
      <div>Second element</div>
    </FlexColumn>
    <Div marginTop={20}>
      This is a{" "}
      <A fontWeight="bold" href="https://github.com/" target="_blank">
        link
      </A>
    </Div>
    <Table marginTop={20}>
      <TableRow>
        <TableCell padding={5} border="1px solid blue">
          This is a cell in a table
        </TableCell>
        <TableCell padding={5} border="1px solid red">
          And this is another cell
        </TableCell>
      </TableRow>
    </Table>
    <Div marginTop={20} hover={{ color: "red", cursor: "pointer" }} active={{ color: "cyan" }}>
      Try to hover over me. Also try to click.
    </Div>
  </div>;

render(<Demo />, document.querySelector("#demo"));
