import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, User, Clock, ArrowRight, Bookmark, FileText } from "lucide-react"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function News() {
  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Header */}
      <section className="py-6 px-4">
        <h1 className="text-2xl font-bold mb-2">Research & Market Insights</h1>
        <p className="text-muted-foreground mb-4">
          Stay updated with the latest research on honey authentication and market trends
        </p>

        {/* Category Tabs */}
        <Tabs defaultValue="all">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="standards">Standards</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>

      {/* Featured Video */}
      <section className="px-4 mb-6">
        <h2 className="text-lg font-semibold mb-3">Featured Research</h2>
        <YouTubeEmbed
          videoId="iUwCQBJRu8A"
          title="Global Honey Market Analysis: Challenges and Opportunities for African Producers"
        />
        <div className="mt-3">
          <p className="text-sm text-muted-foreground">
            This comprehensive analysis examines the challenges faced by Global South honey producers in accessing
            international markets and the authentication technologies helping overcome these barriers.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-4 mb-6">
        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src="/images/honey-testing.png"
            alt="Laboratory technician testing honey samples"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
            <Badge className="self-start mb-2 bg-primary">Featured</Badge>
            <h2 className="text-xl font-bold text-white">Advances in Honey Authentication Technology</h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center text-xs text-white/80">
                <Calendar className="h-3 w-3 mr-1" />
                <span>May 3, 2025</span>
              </div>
              <div className="flex items-center text-xs text-white/80">
                <User className="h-3 w-3 mr-1" />
                <span>Dr. Emma Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="px-4 pb-20">
        <div className="space-y-4">
          {/* Article 1 */}
          <Card>
            <div className="flex">
              <div className="w-1/3 relative">
                <Image
                  src="/images/beekeeper.png"
                  alt="Rwandan beekeeper working with beehives"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-l-lg"
                />
              </div>
              <div className="w-2/3">
                <CardHeader className="p-3 pb-1">
                  <Badge className="self-start mb-1 bg-honey text-honey-foreground">Research</Badge>
                  <CardTitle className="text-base">Authentication Challenges in Global Honey Trade</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>May 1, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>15 min read</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    This comprehensive study examines the challenges faced by Global South honey producers in
                    authenticating their products for international markets.
                  </p>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between">
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <span className="flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>

          {/* Article 2 */}
          <Card>
            <div className="flex">
              <div className="w-1/3 relative">
                <Image
                  src="/images/honey-varieties.png"
                  alt="Different varieties of honey showing color variations"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-l-lg"
                />
              </div>
              <div className="w-2/3">
                <CardHeader className="p-3 pb-1">
                  <Badge className="self-start mb-1">Market</Badge>
                  <CardTitle className="text-base">Global Honey Market Trends 2025</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>April 28, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Analysis of current market trends in the global honey industry, with special focus on opportunities
                    for African producers.
                  </p>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between">
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <span className="flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>

          {/* Article 3 */}
          <Card>
            <div className="flex">
              <div className="w-1/3 relative">
                <Image
                  src="/images/b2b-meeting.png"
                  alt="Business meeting with international buyers"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-l-lg"
                />
              </div>
              <div className="w-2/3">
                <CardHeader className="p-3 pb-1">
                  <Badge className="self-start mb-1 bg-primary">Standards</Badge>
                  <CardTitle className="text-base">EU Import Standards for Honey: 2025 Update</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>April 22, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>12 min read</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Comprehensive guide to the latest European Union standards for honey imports, with specific guidance
                    for African producers.
                  </p>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between">
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <span className="flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>

          {/* Article 4 */}
          <Card>
            <div className="flex">
              <div className="w-1/3 relative">
                <Image
                  src="/images/rwanda-landscape.png"
                  alt="Beautiful landscape of Rwandan hills"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-l-lg"
                />
              </div>
              <div className="w-2/3">
                <CardHeader className="p-3 pb-1">
                  <Badge className="self-start mb-1 bg-honey text-honey-foreground">Research</Badge>
                  <CardTitle className="text-base">Unique Properties of Rwandan Honey Varieties</CardTitle>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>April 15, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>18 min read</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    Scientific analysis of the unique properties and bioactive compounds found in honey varieties from
                    Rwanda's diverse ecological regions.
                  </p>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex justify-between">
                  <Button variant="link" className="p-0 h-auto text-xs">
                    <span className="flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>

        {/* Research Papers Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Latest Research Papers</h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 border rounded-md">
              <div className="bg-muted p-2 rounded-md">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Authentication Methods for Premium Honey</p>
                <p className="text-xs text-muted-foreground">Journal of Food Science, 2025</p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                Download PDF
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-md">
              <div className="bg-muted p-2 rounded-md">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Blockchain Technology in Food Traceability</p>
                <p className="text-xs text-muted-foreground">International Journal of Supply Chain Management, 2025</p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                Download PDF
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 border rounded-md">
              <div className="bg-muted p-2 rounded-md">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Market Access Barriers for Global South Food Producers</p>
                <p className="text-xs text-muted-foreground">Journal of International Trade, 2025</p>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                Download PDF
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">Load More Research</Button>
        </div>
      </section>
    </main>
  )
}
