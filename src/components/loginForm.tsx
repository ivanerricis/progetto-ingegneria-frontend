import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const LoginForm = () => {
    return (
        <Card className="w-full max-w-sm absolute" >
            <CardHeader>
                <CardTitle>Accedi al tuo account</CardTitle>
                <CardDescription>
                    Inserisci email e password per accedere al tuo account o registrati se non ne hai uno.
                </CardDescription>
                <CardAction>
                    <Button variant="outline">Registrati</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="mariorossi@gmail.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Hai dimenticato la password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Accedi
                </Button>
                <Button variant="outline" className="w-full">
                    Accedi con Google
                </Button>
            </CardFooter>
        </Card >
    )
}

export default LoginForm