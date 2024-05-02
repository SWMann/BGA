
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

import {Button} from "@/components/ui/button.tsx";

function Intro() {

    return (
        <>
            <Tabs defaultValue="account" className="w-auto">
                <TabsList className="wrapper w-full  grid-cols-1 align-top w-[100px]">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle>What is a Milsim?</CardTitle>
                            <CardDescription>
                                Milsim or Military Simulation is an old popular type of gaming, the communitees that
                                form around the most popular military simulation games are often called milsims. They
                                vary in the units they aim to portray, the seriousness with which they take themeselves
                                and the styles of operations they run.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-10">
                            <div className="space-y-1">

                            </div>
                            <div className="space-y-1">

                            </div>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>What is a Milsim?</CardTitle>
                            <CardDescription>
                                Milsim or Military Simulation is an old popular type of gaming, the communitees that
                                form around the most popular military simulation games are often called milsims. They
                                vary in the units they aim to portray, the seriousness with which they take themeselves
                                and the styles of operations they run.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">

                            </div>
                            <div className="space-y-1">

                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </>
    );
}

export default Intro