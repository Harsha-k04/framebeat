import { Link } from "react-router-dom"
                to="/blog/grow-youtube-channel-2026"
                className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition"
              >
                Read Article
              </Link>
            </div>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-6 py-24 border-t border-neutral-900">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
              Latest Articles
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
              Insights For Modern Digital Growth
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="group h-full overflow-hidden rounded-[2rem] border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 hover:border-neutral-700 transition duration-300">
                    <span className="inline-block rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.15em] text-neutral-400">
                      {blog.category}
                    </span>

                    <h3 className="mt-6 text-3xl font-semibold tracking-tight leading-tight group-hover:text-white transition">
                      {blog.title}
                    </h3>

                    <p className="mt-5 text-neutral-400 leading-relaxed">
                      {blog.description}
                    </p>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-sm text-neutral-500">
                        {blog.date}
                      </span>

                      <span className="text-sm text-white">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
