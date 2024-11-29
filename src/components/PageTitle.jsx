/* eslint-disable react/prop-types */
const PageTitle = ({ title, subtitle }) => {
  return (
    <div className='flex flex-col gap-4'>
        <h3 className="text-6xl text-gray-100 font-extrabold tracking-tight text-center uppercase">{title}</h3>
        <span className="md:text-lg text-sm font-mono text-secondary-400 uppercase tracking-wider text-center">{subtitle}</span>
    </div>
  )
}

export default PageTitle