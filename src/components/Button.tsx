import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return <button className="bg-gray-300 px-3 py-1 rounded">{children}</button>;
};
