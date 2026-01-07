export default function SocialMediaManagement() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Social Media Management
            </h1>

            <p className="mt-6 text-neutral-400 max-w-3xl">
                We manage brand presence across social platforms with a strategy-first
                approach focused on consistency, relevance, and growth.
            </p>

            <h2 className="mt-16 text-2xl font-semibold">Services Include</h2>

            <ul className="mt-6 list-disc list-inside space-y-2 text-neutral-400">
                <li>Content planning & posting</li>
                <li>Reels & short-form video strategy</li>
                <li>Community engagement</li>
                <li>Analytics & growth optimization</li>
            </ul>

            <a href="/contact" className="inline-block mt-12 px-6 py-3 bg-white text-black rounded-lg">
                Contact Us
            </a>
        </div>
    )
}
