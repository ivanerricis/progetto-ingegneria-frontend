import { Button } from "./ui/button"

export const Navbar = () => {
    return (
        <div className="h-10 w-full border-b-2 flex justify-between items-center px-1 gap-2" >
            <div>
                <Button variant={"outline"} size={"sm"}>
                    Console per agenti
                </Button>
            </div>
            <div>
                <Button variant={"outline"} size={"sm"}>
                    Accedi
                </Button>
            </div>
        </div>
    )
}

export default Navbar