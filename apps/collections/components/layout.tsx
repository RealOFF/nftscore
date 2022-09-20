import { PropsWithChildren } from "react"
import { Header } from "./header"

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>{children}</main>
    </div>
  )
}
