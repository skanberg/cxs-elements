import React from "react";
import cxs from "cxs/atomic";

export const Div = ({ children, ...style }) =>
  <div className={cxs(style)}>
    {children}
  </div>;

export const Span = ({ children, ...style }) =>
  <span className={cxs(style)}>
    {children}
  </span>;

export const A = ({ children, href, target, onClick, ...style }) =>
  <a href={href} target={target} onClick={onClick} className={cxs(style)}>
    {children}
  </a>;

export const FlexRow = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "flex", flexDirection: "row" })}>
    {children}
  </div>;

export const FlexColumn = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "flex", flexDirection: "column" })}>
    {children}
  </div>;

export const Table = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "table" })}>
    {children}
  </div>;

export const TableRow = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "table-row" })}>
    {children}
  </div>;

export const TableCell = ({ children, ...style }) =>
  <div className={cxs({ ...style, display: "table-cell" })}>
    {children}
  </div>;
