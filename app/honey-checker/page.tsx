"use client"

import { Input } from "@/components/ui/input"

import { useState } from "react"
import Image from "next/image"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FlaskRoundIcon as Flask, CheckCircle2, XCircle, Info, FileText } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function HoneyChecker() {
  const [result, setResult] = useState<null | {
    isReal: boolean
    confidence: number
    details: string
  }>(null)

  const [formData, setFormData] = useState({
    color: "",
    texture: "",
    taste: "",
    solubility: 50,
    aroma: "",
  })

  const handleSubmit = () => {
    // In a real app, this would call an AI service
    // This is just a mock implementation
    const mockResult = {
      isReal: Math.random() > 0.3, // 70% chance of being real
      confidence: Math.floor(Math.random() * 30) + 70, // 70-99% confidence
      details:
        "Based on the characteristics you provided, particularly the texture and solubility, this appears to be a high-quality Rwandan honey. The aroma and taste profiles match what we'd expect from authentic honey from this region.",
    }

    setResult(mockResult)
  }

  return (
    <main className="min-h-screen">
      <MobileNav />

      {/* Header */}
      <section className="py-6 px-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-honey/20 p-2 rounded-full">
            <Flask className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-2xl font-bold">Honey Authentication</h1>
        </div>
        <p className="text-muted-foreground mb-4">
          Verify the authenticity of Rwandan honey with our advanced testing tools
        </p>
      </section>

      {/* Video Section */}
      <section className="px-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">How Our Authentication Works</CardTitle>
            <CardDescription>Watch this short video to understand our verification process</CardDescription>
          </CardHeader>
          <CardContent>
            <YouTubeEmbed videoId="h63sGb4k3Ck" title="Honey Authentication Process Explained" />
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20">
        <Tabs defaultValue="checker">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="checker">Honey Checker</TabsTrigger>
            <TabsTrigger value="lab">Lab Testing</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>

          <TabsContent value="checker" className="mt-4">
            {result ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {result.isReal ? (
                      <>
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                        <span>Authentic Honey Detected</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 text-red-500" />
                        <span>Possible Adulteration</span>
                      </>
                    )}
                  </CardTitle>
                  <CardDescription>Confidence: {result.confidence}%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{result.details}</p>

                  <div className="mt-4 p-3 bg-muted rounded-md">
                    <h3 className="text-sm font-medium mb-2">Your Honey Profile:</h3>
                    <ul className="text-sm space-y-1">
                      <li>
                        <span className="font-medium">Color:</span> {formData.color}
                      </li>
                      <li>
                        <span className="font-medium">Texture:</span> {formData.texture}
                      </li>
                      <li>
                        <span className="font-medium">Taste:</span> {formData.taste}
                      </li>
                      <li>
                        <span className="font-medium">Solubility:</span> {formData.solubility}%
                      </li>
                      <li>
                        <span className="font-medium">Aroma:</span> {formData.aroma}
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => setResult(null)} className="w-full">
                    Check Another Sample
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Analyze Your Honey</CardTitle>
                  <CardDescription>Fill in the characteristics of your honey sample</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Color Selection */}
                  <div className="space-y-2">
                    <Label>Color</Label>
                    <RadioGroup
                      value={formData.color}
                      onValueChange={(value) => setFormData({ ...formData, color: value })}
                    >
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="color-light" />
                          <Label htmlFor="color-light">Light</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="amber" id="color-amber" />
                          <Label htmlFor="color-amber">Amber</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="color-dark" />
                          <Label htmlFor="color-dark">Dark</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Texture Selection */}
                  <div className="space-y-2">
                    <Label>Texture</Label>
                    <RadioGroup
                      value={formData.texture}
                      onValueChange={(value) => setFormData({ ...formData, texture: value })}
                    >
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="runny" id="texture-runny" />
                          <Label htmlFor="texture-runny">Runny</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="creamy" id="texture-creamy" />
                          <Label htmlFor="texture-creamy">Creamy</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="crystallized" id="texture-crystallized" />
                          <Label htmlFor="texture-crystallized">Crystallized</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Taste Selection */}
                  <div className="space-y-2">
                    <Label>Taste</Label>
                    <RadioGroup
                      value={formData.taste}
                      onValueChange={(value) => setFormData({ ...formData, taste: value })}
                    >
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mild" id="taste-mild" />
                          <Label htmlFor="taste-mild">Mild</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="floral" id="taste-floral" />
                          <Label htmlFor="taste-floral">Floral</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="strong" id="taste-strong" />
                          <Label htmlFor="taste-strong">Strong</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Solubility Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Solubility in Water</Label>
                      <span className="text-sm">{formData.solubility}%</span>
                    </div>
                    <Slider
                      value={[formData.solubility]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value) => setFormData({ ...formData, solubility: value[0] })}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Dissolves slowly</span>
                      <span>Dissolves quickly</span>
                    </div>
                  </div>

                  {/* Aroma Selection */}
                  <div className="space-y-2">
                    <Label>Aroma</Label>
                    <RadioGroup
                      value={formData.aroma}
                      onValueChange={(value) => setFormData({ ...formData, aroma: value })}
                    >
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="subtle" id="aroma-subtle" />
                          <Label htmlFor="aroma-subtle">Subtle</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="floral" id="aroma-floral" />
                          <Label htmlFor="aroma-floral">Floral</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intense" id="aroma-intense" />
                          <Label htmlFor="aroma-intense">Intense</Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={handleSubmit}
                    className="w-full"
                    disabled={!formData.color || !formData.texture || !formData.taste || !formData.aroma}
                  >
                    Analyze Honey
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="lab" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Laboratory Testing Services</CardTitle>
                <CardDescription>Professional authentication for commercial buyers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/honey-testing.png"
                    alt="Laboratory technician testing honey samples"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>For Commercial Buyers</AlertTitle>
                  <AlertDescription>
                    Our laboratory testing services provide comprehensive authentication reports for commercial
                    quantities of honey.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  {/* Test Type 1 */}
                  <div className="p-3 border rounded-md">
                    <h3 className="font-medium mb-1">Nuclear Magnetic Resonance (NMR) Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced spectroscopic analysis that creates a unique "fingerprint" of honey components to detect
                      adulteration.
                    </p>
                  </div>

                  {/* Test Type 2 */}
                  <div className="p-3 border rounded-md">
                    <h3 className="font-medium mb-1">Pollen Analysis (Melissopalynology)</h3>
                    <p className="text-sm text-muted-foreground">
                      Microscopic examination of pollen in honey to verify geographical origin and floral sources
                      specific to Rwanda.
                    </p>
                  </div>

                  {/* Test Type 3 */}
                  <div className="p-3 border rounded-md">
                    <h3 className="font-medium mb-1">Chemical Composition Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive testing for sugar profiles, enzymes, and other compounds to verify honey
                      authenticity and detect adulteration.
                    </p>
                  </div>

                  {/* Test Type 4 */}
                  <div className="p-3 border rounded-md">
                    <h3 className="font-medium mb-1">Isotope Ratio Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Measures carbon isotope ratios to detect the addition of sugar syrups derived from C4 plants like
                      corn or sugar cane.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Laboratory Testing</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Traceability</CardTitle>
                <CardDescription>Verify the complete journey of your honey from hive to shelf</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-honey/20 p-3 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Scan QR Code on Product</h3>
                    <p className="text-sm text-muted-foreground">
                      Each jar of Rwandan honey has a unique QR code linking to its blockchain record
                    </p>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <h3 className="font-medium mb-2">Enter Product ID</h3>
                  <div className="flex gap-2">
                    <Input placeholder="Enter product ID or scan QR code" className="flex-1" />
                    <Button>Verify</Button>
                  </div>
                </div>

                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/rwanda-landscape.png"
                    alt="Rwandan landscape with beehives"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-medium">Transparent Supply Chain</h3>
                    <p className="text-white/80 text-sm">
                      Our blockchain system records every step from harvest to export, ensuring complete traceability
                    </p>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertTitle>How Blockchain Verification Works</AlertTitle>
                  <AlertDescription>
                    Each batch of honey is registered on an immutable blockchain ledger, recording harvest location,
                    beekeeper details, testing results, and shipping information.
                  </AlertDescription>
                </Alert>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More About Our Blockchain System
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
