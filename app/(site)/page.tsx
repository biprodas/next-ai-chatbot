import { Container } from "~/components/container";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between px-6 mt-12">
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-800 dark:text-gray-200">
            \ Meet Your Multimodal AI Chatbot
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Chat, see, hear, and explore smarter with our AI that understands text, images, and voice — all in one seamless experience.
          </p>
          <Button className="text-lg px-6 py-4">Try It Now</Button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <Card>
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold mb-2">Text & Voice Input</h3>
              <p className="text-sm text-muted-foreground">
                Communicate using your voice or keyboard. The chatbot understands both with remarkable precision.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
            <h3 className="text-xl font-semibold mb-2">Image Understanding</h3>
            <p className="text-sm text-muted-foreground">
              Upload images and ask questions about them. Your AI assistant can see and interpret visuals.
            </p>
          </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5">
            <h3 className="text-xl font-semibold mb-2">Instant Reasoning</h3>
            <p className="text-sm text-muted-foreground">
              Get fast, intelligent responses to complex queries. Perfect for study, work, or just curiosity.
            </p>
            </CardContent>
          </Card>
        </section>        
      </div>
    </Container>
  );
}
