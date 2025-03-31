import Image from "next/image"

type Sponsor = {
  id: number
  name: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  imageSrc: string
  website: string
}

export default function SponsorsPage() {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Example",
      tier: "platinum",
      imageSrc: "/placeholder.svg?height=300&width=300",
      website: "#",
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

  // Sort sponsors by tier importance
  const sortedSponsors = [...sponsors].sort((a, b) => {
    const tierOrder = { platinum: 0, gold: 1, silver: 2, bronze: 3 }
    return tierOrder[a.tier] - tierOrder[b.tier]
  })

  return (
    <main className="min-h-screen py-12 bg-[#f5faff]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#044a90] mb-12">Our Sponsors</h1>

        <section className="mb-12">
          <p className="text-lg text-[#0e6fb9] max-w-4xl mx-auto text-center mb-8">
            We are grateful for the support of our sponsors who make our work possible.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className={`rounded-lg shadow-lg overflow-hidden bg-white border-t-4 ${tierColors[sponsor.tier]}`}
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="relative w-48 h-48 mb-4">
                    <Image
                      src={sponsor.imageSrc || "/placeholder.svg"}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#044a90] mb-1 text-center">{sponsor.name}</h3>
                  <p className="text-[#0e6fb9] mb-4 text-center">{tierNames[sponsor.tier]}</p>
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#044a90] hover:text-[#4eb5e9] transition-colors"
                  >
                    Visit Website
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Website Embed Section */}
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#044a90] mb-6 text-center">Support Our Team</h2>
          <div className="w-full max-w-3xl mx-auto bg-[#f5faff] rounded-lg min-h-[900px]">
            <iframe
                src="https://hcb.hackclub.com/donations/start/nobles-robotics"
                className="w-full min-h-[900px] border-none"
                frameBorder="0"
                allowFullScreen
            ></iframe>
          </div>
        </section>



{/*            <div className="text-center p-8">
              <p className="text-[#0e6fb9] mb-4">Donation website embed placeholder</p>
              <p className="text-sm text-[#0e6fb9]">
                This is where you would embed your donation platform of choice (e.g., GoFundMe, PayPal, etc.)
              </p>
            </div>*/}

      </div>
    </main>
  )
}

