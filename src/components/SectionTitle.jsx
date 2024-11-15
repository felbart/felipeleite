import HorizontalDiv from "./divider/HorizontalDiv"

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col gap-4'>
        <h3 className="text-5xl text-gray-100 font-extrabold tracking-tight uppercase">{title}</h3>
        <span className="text-md font-mono text-secondary-400 uppercase tracking-wider">{subtitle}</span>
    </div>
  )
}

export default SectionTitle