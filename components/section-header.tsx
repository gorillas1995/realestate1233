interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({ label, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 lg:mb-16`}>
      {label && (
        <span className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-4">{label}</span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-balance mb-4">{title}</h2>
      {description && <p className="text-muted text-lg leading-relaxed">{description}</p>}
    </div>
  )
}
