import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import CardRealEstate from "@/pages/Homepage/components/cardRealEstate"
import { ModeToggle } from "@/components/mode-toggle"

export const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen max-h-screen">
            <header className="flex flex-row items-center justify-between p-2 border-b-2">
                <div className="flex justify-start flex-1">
                    DietiEstates
                </div>
                <div className="flex justify-center flex-1">
                    <Field orientation="horizontal">
                        <Input type="search" placeholder="Cerca..." />
                        <Button variant={"outline"} size={"icon"}>
                            <Search />
                        </Button>
                    </Field>
                </div>
                <div className="flex justify-end flex-1 items-center gap-2">
                    <ModeToggle />
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </header>
            <main className="flex flex-col grow gap-2 overflow-y-hidden">
                <div className="flex flex-col p-2 gap-2 overflow-y-scroll">
                    <CardRealEstate name="Nome immobile" agencyName="Nome agenzia" price="150000"/>
                    <CardRealEstate name="Nome immobile" agencyName="Nome agenzia" price="150000"/>
                    <CardRealEstate name="Nome immobile" agencyName="Nome agenzia" price="150000"/>
                    <CardRealEstate name="Nome immobile" agencyName="Nome agenzia" price="150000"/>
                </div>
            </main>
            <footer className="h-10 border-t-2">
            </footer>
        </div>
    )
}

export default Homepage