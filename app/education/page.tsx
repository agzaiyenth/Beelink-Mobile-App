import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, BarChart, ArrowRight } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function Education() {
  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Header */}
      <section className="py-6 px-4">
        <h1 className="text-2xl font-bold mb-2">Honey Education Hub</h1>
        <p className="text-muted-foreground mb-4">
          Research-backed information on Rwandan honey varieties, authentication, and market insights
        </p>

        {/* Category Tabs */}
        <Tabs defaultValue="types">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="types">Honey Types</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="market">Market Research</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              {/* Honey Type Card 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Rwandan Wildflower Honey</CardTitle>
                    <div className="bg-honey/20 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Produced from the diverse wildflowers of Rwanda's hills. Known for its complex flavor profile with
                    notes of citrus and tropical fruits.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto">
                    <span className="flex items-center">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Honey Type Card 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Eucalyptus Honey</CardTitle>
                    <div className="bg-honey/20 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Harvested from Rwanda's eucalyptus forests. Distinguished by its bold, medicinal flavor and known
                    for its respiratory health benefits.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto">
                    <span className="flex items-center">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>

              {/* Honey Type Card 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Acacia Honey</CardTitle>
                    <div className="bg-honey/20 p-2 rounded-full">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    Collected from Rwanda's acacia trees. Prized for its light color, delicate flavor, and slow
                    crystallization properties.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0 h-auto">
                    <span className="flex items-center">
                      Learn more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Featured Video */}
      <section className="px-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Featured Video</h2>
        <YouTubeEmbed videoId="iUwCQBJRu8A" title="The Science of Honey Authentication: Ensuring Quality and Safety" />
        <p className="mt-3 text-sm text-muted-foreground">
          Learn about the scientific methods used to authenticate honey and detect adulteration in this informative
          presentation by food safety experts.
        </p>
      </section>

      {/* Featured Content */}
      <section className="px-4 pb-20">
        <h2 className="text-xl font-semibold mb-4">Research & Resources</h2>

        <div className="grid grid-cols-1 gap-4">
          {/* Infographic Card */}
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-honey/20 p-2 rounded-full">
                <BarChart className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Global Honey Market Analysis</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative h-40 bg-muted rounded-md overflow-hidden">
                <Image
                  src="/images/honey-varieties.png"
                  alt="Different varieties of honey showing color variations"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Comprehensive analysis of the global raw honey market, with special focus on authentication challenges
                and opportunities for Global South producers.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Download Market Report</Button>
            </CardFooter>
          </Card>

          {/* Article Card */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-honey/20 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Food Safety Standards for Honey Exports</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Detailed guide to international food safety standards for honey exports, including EU, US, and Asian
                market requirements. Essential reading for producers and importers.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Read Article</Button>
            </CardFooter>
          </Card>

          {/* Research Paper Card */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="bg-honey/20 p-2 rounded-full">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">Authentication Methods for Premium Honey</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Peer-reviewed research on advanced methods for honey authentication, including NMR spectroscopy, DNA
                metabarcoding, and blockchain-based traceability systems.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Download Research Paper</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  )
}
