import SEO from "../components/SEO"

function JobCard({ title, type, location, description, applyLink, applyType }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-neutral-400">
        {type} • {location}
      </p>

      <p className="mt-4 text-neutral-300 leading-relaxed">
        {description}
      </p>

      {applyType === "form" ? (
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 rounded-lg bg-white px-6 py-3 text-black hover:bg-neutral-200 transition"
        >
          Apply Now →
        </a>
      ) : (
        <a
          href={`mailto:${applyLink}`}
          className="inline-block mt-6 rounded-lg bg-white px-6 py-3 text-black hover:bg-neutral-200 transition"
        >
          Apply via Email →
        </a>
      )}
    </div>
  )
}

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers at Framebeat Labs & Media LLP | Internships & Freelance Opportunities"
        description="Explore internships and freelance opportunities at Framebeat Labs & Media LLP across AI video production, social media, sales, and content creation."
        keywords="media internships India, AI video internship, video editing internship, social media intern, influencer freelance"
        url="https://framebeat.vercel.app/careers"
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Careers at Framebeat
        </h1>

        <p className="mt-6 max-w-3xl text-neutral-400 leading-relaxed">
          Join Framebeat Labs & Media LLP and work at the intersection of media,
          AI, and digital marketing. We collaborate with brands, creators, and
          startups across India and globally.
        </p>

        {/* Jobs */}
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <JobCard
            title="🤖🎬 AI Video Production & Editing Intern"
            type="Internship (Full-time / Part-time)"
            location="Remote / On-site (India)"
            description="Work on AI-generated videos, brand content, reels, explainers, and promotional videos using modern AI tools and editing software."
            applyLink="hr@framebeatlabs.com"
            applyType="email"
          />

          <JobCard
            title="🌟 Freelance Influencers & Content Creators"
            type="Freelance / Project-based"
            location="Remote"
            description="Collaborate with brands across industries to create authentic sponsored content while maintaining your creative freedom."
            applyLink="https://forms.gle/grUetGff9C61o86BA"
            applyType="form"
          />

          <JobCard
            title="💼 Sales Intern (Commission-Based)"
            type="Internship (Commission-Based)"
            location="Remote / On-site (India)"
            description="Support client acquisition, outreach, and deal closure while earning commission on every successful project."
            applyLink="hr@framebeatlabs.com"
            applyType="email"
          />

          <JobCard
            title="📱 Social Media Intern"
            type="Internship (Full-time / Part-time)"
            location="Remote / On-site (India)"
            description="Assist in managing brand social media accounts, content planning, captions, trends research, and performance tracking."
            applyLink="hr@framebeatlabs.com"
            applyType="email"
          />

          <JobCard
            title="🎬 Video Editor Intern"
            type="Internship (Full-time / Part-time)"
            location="Remote / On-site (India)"
            description="Edit reels, ads, podcasts, and YouTube videos while collaborating with creatives and brands on real projects."
            applyLink="hr@framebeatlabs.com"
            applyType="email"
          />
        </div>

        {/* Footer note */}
        <p className="mt-20 text-sm text-neutral-500 max-w-3xl">
          📩 For email applications, please include your resume and portfolio
          links (if available). Shortlisted candidates will be contacted.
        </p>
      </div>
    </>
  )
}
