import React, {FC} from "react";

export interface layoutType {
  children: React.ReactNode
}

export const DarkLayout: FC<layoutType> = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
        <h3> Dark Layout </h3>
      {children}
    </div>
  );
};
