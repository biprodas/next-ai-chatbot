import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import Link from "next/link"
import { XIcon } from "lucide-react"

const pricing = {
  monthly: [
    {
      title: "Free",
      price: "$0",
      description: "Explore how AI can help you with everyday tasks",
      features: [
        "Access to GPT-4o mini and reasoning",
        "Standard voice mode",
        "Real-time data from the web with search",
        "Limited access to file uploads, data analysis, and image generation",
      ],
      buttonText: "Your current plan",
      disabled: true,
    },
    {
      title: "Plus",
      price: "$20",
      description:
        "Level up productivity and creativity with expanded access",
      features: [
        "Everything in Free",
        "Extended limits on messaging, file uploads, and image generation",
        "Advanced voice mode",
        "Access to deep research and ChatGPT agents",
      ],
      buttonText: "Get Plus",
    },
    {
      title: "Pro",
      price: "$200",
      description:
        "Get the best of OpenAI with the highest level of access",
      features: [
        "Everything in Plus",
        "Unlimited access to all models",
        "Unlimited advanced voice",
        "Extended access to research tools and agents",
      ],
      buttonText: "Get Pro",
    },
  ],
  yearly: [
    {
      title: "Free",
      price: "$0",
      description: "Explore how AI can help you with everyday tasks",
      features: [
        "Access to GPT-4o mini and reasoning",
        "Standard voice mode",
        "Real-time data from the web with search",
        "Limited access to file uploads, data analysis, and image generation",
      ],
      buttonText: "Your current plan",
      disabled: true,
    },
    {
      title: "Plus",
      price: "$200",
      description:
        "Level up productivity and creativity with expanded access (billed yearly)",
      features: [
        "Everything in Free",
        "Extended limits on messaging, file uploads, and image generation",
        "Advanced voice mode",
        "Access to deep research and ChatGPT agents",
      ],
      buttonText: "Get Plus",
    },
    {
      title: "Pro",
      price: "$2000",
      description:
        "Get the best of OpenAI with the highest level of access (billed yearly)",
      features: [
        "Everything in Plus",
        "Unlimited access to all models",
        "Unlimited advanced voice",
        "Extended access to research tools and agents",
      ],
      buttonText: "Get Pro",
    },
  ],
}

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 relative">
      <h1 className="text-3xl font-bold text-center">Upgrade your plan</h1>
      <p className="text-center text-sm text-muted-foreground mb-4">
        Choose a plan that suits your needs. All plans come with a 14-day money-back guarantee.
      </p>
      <Tabs defaultValue="monthly">
        <div className="flex justify-center mb-6">
          <TabsList className="border">
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="yearly">Yearly Billing</TabsTrigger>
          </TabsList>
        </div>
        {Object.entries(pricing).map(([billing, plans]) => (
          <TabsContent key={billing} value={billing}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.title} className="flex flex-col border">
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <p className="text-3xl font-semibold mt-2">{plan.price} <span className="text-sm font-normal">USD / {billing}</span></p>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-sm">✓ {feature}</li>
                      ))}
                    </ul>
                    <Button disabled={plan.disabled} className="w-full mt-auto">
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-2">
          Need help choosing a plan?{" "}
          <Link href="/contact-us" className="text-blue-600 hover:underline">
            Contact Us
          </Link>
        </p>
        <p className="text-sm text-muted-foreground">
          All plans come with a 14-day money-back guarantee.
        </p>
      </div>
      <Button size="icon" variant="outline" className="mt-4 absolute top-0 right-0 rounded-full" asChild>
        <Link href="/">
          <XIcon />
        </Link>
      </Button>
    </div>
  )
}
