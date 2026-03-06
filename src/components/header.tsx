import { Earth } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <div className="h-12 w-full border-b flex justify-between items-center px-26 gap-2 shadow-md" >
            <div className="flex justify-start">
                <Button variant={"outline"} >
                    Console per agenti
                </Button>
            </div>
            <div className="flex gap-1 items-center justify-between">
                <ModeToggle />
                <Button variant={"outline"} >
                    <Earth className="size-5" />
                    Italiano
                </Button>
            </div>
        </div>
    )
}

export default Header