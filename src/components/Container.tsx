import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-lg px-6 md:px-0">{children}</div>;
}

export default Container;
