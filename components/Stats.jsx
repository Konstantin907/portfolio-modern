"use client"

const stats = [
  { num: 3, text: "Years of experience" },
  { num: 15, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
]

const Stats = () => {
  return (
    <section className="container mx-auto pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
          >
            <span
              className="text-white text-6xl xl:text-6xl font-extrabold tabular-nums min-w-[4ch] inline-block text-right"
              aria-label={String(item.num)}
            >
              {item.num}
            </span>
            <p
              className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} text-white/80 leading-snug`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
