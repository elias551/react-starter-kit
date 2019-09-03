import React, { ReactNode, useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.aside<{ isItalic: boolean }>`
  display: flex;
  flex-direction: column;
  > a {
    font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
  }
`;

export const Layout = ({
  header,
  sidebar,
  footer,
  content
}: {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  content: ReactNode;
}) => {
  const [isItalic, toggleItalic] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {header || "Header content"}
        <button onClick={() => toggleItalic(!isItalic)}>Toggle italic</button>
      </header>
      <Sidebar isItalic={isItalic}>
        {sidebar || (
          <>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </>
        )}
      </Sidebar>
      <section>{content}</section>
      <footer>{footer || "footer"}</footer>
    </div>
  );
};
