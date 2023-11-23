"use client"

import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card"

const testimonials = [
    {
        name: "Antonio",
        title: "Software Engineer",
        avatar: "A",
        description: "This is a good co-programming software."
    },
    {
        name: "Sandra",
        title: "content Creator",
        avatar: "S",
        description: "Creating content as never been this easy. I create contents with WizzAI with no hassle."
    },
    {
        name: "Micheal",
        title: "Student",
        avatar: "M",
        description: "WizzAI as helped me as a student, it's my student assistant."
    },
    {
        name: "Antonio",
        title: "Software Engineer",
        avatar: "A",
        description: "This is a good co-programming software."
    },
    {
        name: "Cole",
        title: "Bankend Developer",
        avatar: "A",
        description: "   ."
    },
]

export const LandingContent = () => {
    return(
        <div className="px-10 pb-20 ">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) =>(
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gp-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>

                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}