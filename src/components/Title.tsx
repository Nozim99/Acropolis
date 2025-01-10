const TitleSection = ({title, className}: { title: string, className?: string }) => {
  return (
    <h2 className={"font-extrabold text-5xl mb-[35px] relative"}>
      <div className={"bg-[var(--orange)] w-[50px] h-[4.5px] -top-[22px] absolute"}></div>
      <span className={className}>{title}</span>
    </h2>
  )
}

export default TitleSection;