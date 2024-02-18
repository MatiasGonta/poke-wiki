export default function Skeleton({ width, height, className }: { width: string, height: string, className?: string }) {
  return (
    <div
        className={`
            bg-[linear-gradient(90deg,#ccc_0px,rgba(229,229,229,.8)_40px,#ccc_80px)] bg-[length:300%] bg-[100%_0] rounded animate-shimmer 
            ${width} 
            ${height} 
            ${className}
        `}
    />
  )
}