import React from "react";
import { Topbar, MainControl, BottomControl } from "components";
import styled from "styled-components";
import tomatoImg from "images/tomato.jpeg";
// import tw from "tailwind.macro";

/**
 * act as container fluid
 */
const AppStyles = styled.div.attrs({
  className: "w-full h-screen bg-tomo"
})<{ url: string }>`
  // background-image: ${props => `url(${props.url})`}  
`;

const App: React.FC = () => {
  return (
    <AppStyles url={tomatoImg}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <Topbar />
          <MainControl />
          <BottomControl />
        </div>
      </div>
    </AppStyles>
  );
};

export default App;
