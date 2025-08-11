import Image from "next/image"
import ReactMarkdown from "react-markdown"

type Sponsor = {
  id: number
  name: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  imageSrc: string
  description: string // markdown-supported text
}

export default function SponsorsPage() {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Jukebox",
      tier: "silver",
      imageSrc: "/sponsors/jukebox.jpg?height=300&width=300",
      description:
          "Thank you so much Jukebox for the coolest [custom stickers](https://www.jukeboxprint.com/custom-stickers)!",
    },
    {
      id: 2,
      name: "Gene Haas Foundation",
      tier: "platinum",
      imageSrc: "/sponsors/GHF.png?height=300&width=300",
      description:
          "Thank you so much [Gene Haas Foundation](https://www.ghaasfoundation.org/) for your support! We are incredibly grateful for your generosity and support!",
    },
    {
      id: 3,
      name: "Polymaker",
      tier: "bronze",
      imageSrc: "/sponsors/polymaker.png?height=300&width=300",
      description:
          "Thank you so much [Polymaker](https://us.polymaker.com/) for the free filament!",
    },
  ]

  const tierColors = {
    platinum: "border-[#e5e5e5]",
    gold: "border-[#ffd700]",
    silver: "border-[#c0c0c0]",
    bronze: "border-[#cd7f32]",
  }

  const tierNames = {
    platinum: "Platinum Sponsor",
    gold: "Gold Sponsor",
    silver: "Silver Sponsor",
    bronze: "Bronze Sponsor",
  }

  const sortedSponsors = [...sponsors].sort((a, b) => {
    const tierOrder = { platinum: 0, gold: 1, silver: 2, bronze: 3 }
    return tierOrder[a.tier] - tierOrder[b.tier]
  })

  return (
      <main className="min-h-screen bg-[#f5faff] py-12">
        <div className="container mx-auto px-4">
          <h1 className="mb-12 text-center text-4xl font-bold text-[#044a90]">Our Sponsors</h1>

          <section className="mb-12">
            <p className="mx-auto mb-8 max-w-4xl text-center text-lg text-[#0e6fb9]">
              Our robotics teams has many expenses from robot parts to registration fees. We are grateful for the support
              of our sponsors, who help make our participation in competitions possible.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sortedSponsors.map((sponsor) => (
                  <div
                      key={sponsor.id}
                      className={`overflow-hidden rounded-lg border-t-4 bg-white shadow-lg ${tierColors[sponsor.tier]}`}
                  >
                    <div className="flex flex-col items-center p-6">
                      <h3 className="mb-1 text-center text-xl font-bold text-[#044a90]">{sponsor.name}</h3>
                      <div className="relative mb-4 h-48 w-48">
                        <Image
                            src={sponsor.imageSrc || "/placeholder.svg?height=300&width=300&query=logo"}
                            alt={sponsor.name}
                            fill
                            className="object-contain"
                        />
                      </div>
                      <p className="mb-3 text-center text-[#0e6fb9]">{tierNames[sponsor.tier]}</p>

                      {/* Markdown-enabled description */}
                      <div className="text-center text-[#0e6fb9]">
                        <ReactMarkdown
                            components={{
                              a: ({ node, ...props }) => (
                                  <a
                                      {...props}
                                      className="text-[#044a90] underline underline-offset-4 hover:text-[#4eb5e9]"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                  />
                              ),
                              p: ({ node, ...props }) => <p className="mb-0" {...props} />,
                            }}
                        >
                          {sponsor.description}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <h2 className="mb-4 text-2xl font-bold text-[#044a90]">More Information Coming Soon</h2>
              <p className="text-lg text-[#0e6fb9]">Sponsorship tiers and details coming soon!</p>
            </div>
          </section>
        </div>
      </main>
  )
}
