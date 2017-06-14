import React from "react";
import cxs from "cxs";

export const Div = ({ children, ...style }) =>
  <div className={cxs(style)}>{children}</div>;

export const Span = ({ children, ...style }) =>
  <span className={cxs(style)}>{children}</span>;

export const FlexRow = ({ children, ...style }) =>
  <span className={cxs({ ...style, display: "flex", flexDirection: "row" })}>
    {children}
  </span>;

export const FlexColumn = ({ children, ...style }) =>
  <span className={cxs({ ...style, display: "flex", flexDirection: "column" })}>
    {children}
  </span>;
