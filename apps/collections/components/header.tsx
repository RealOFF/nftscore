
import {Button} from "@nftscore/uikit"

export const Header = () => {
  return (
    <div className="bg-primary-100 w-full h-16 backdrop-blur-2xl flex justify-between items-center px-16">
      <div className="flex gap-24 w-full h-min items-center">
        <span className="text-font-primary font-semibold text-lg">
          nftscore
        </span>
        <Button>HELLO</Button>
        <input className="max-w-lg w-full maw-128 h-10 rounded-lg p-2.5 text-font-secondary bg-primary" placeholder="Search collections by name or address" />
      </div>
      <div className="w-full flex justify-end">
        <button className="text-font-primary rounded-lg border-font border py-2 px-5">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}