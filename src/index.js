import React from "react";
import cxs from "cxs";

export const Div = ({ children, ...style }) =>
  <div className={cxs(style)}>{children}</div>;

export const Span = ({ children, ...style }) =>
  <span className={cxs(style)}>{children}</span>;

export const A = ({ children, href, target, ...style }) =>
  <a href={href} target={target} className={cxs(style)}>{children}</a>;

export const FlexRow = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "flex", flexDirection: "row" })}>
    {children}
  </div>;

export const FlexColumn = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "flex", flexDirection: "column" })}>
    {children}
  </div>;
