import React from "react";
import cxs from "cxs/atomic";
import classNames from "classnames";

const getClassName = (style, hover, focus, active) =>
  classNames(
    cxs(style),
    active && cxs({ ":active": { ...active } }),
    hover && cxs({ ":hover": { ...hover } }),
    focus && cxs({ ":focus": { ...focus } }),
  );

export const Div = ({ children, hover, focus, active, ...style }) =>
  <div className={getClassName(style, hover, focus, active)}>
    {children}
  </div>;

export const Span = ({ children, hover, focus, active, ...style }) =>
  <span className={getClassName(style, hover, focus, active)}>
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
