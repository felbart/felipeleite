import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../constants'
import tsr01 from '../assets/images/tsr-01.png'
import tsr02 from '../assets/images/tsr-02.png'
import tsr03 from '../assets/images/tsr-03.png'
import { PiArrowRight } from 'react-icons/pi'

const RecentProjects = () => {
  return (
    <section id='projects' className='min-h-screen bg-green-200'>
        <div>
            <div className="container mx-auto flex justify-between py-8">
                <div className='sticky top-40'>
                <SectionTitle title="Projetos" subtitle="Alguns projetos selecionados" />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className="bg-red-200 w-96 h-64">
                        Projeto 1
                    </div>
                    <div className="bg-green-200 w-96 h-64">
                        Projeto 2
                    </div>
                    <div className="bg-primary-200 w-96 h-64">
                        Projeto 3
                    </div>
                    <div className="bg-secondary-200 w-96 h-64">
                        Projeto 4
                    </div>
                </div>
            </div>    
        </div>
    </section>
//     <section id="projects" className="container py-16 md:py-32 flex flex-col gap-8">
//         <div className='flex flex-col gap-4 py-8'>
//             <SectionTitle title="Projetos" subtitle="Alguns projetos selecionados" />
//         </div>
//         <div className='flex flex-col md:flex-row justify-between item-start gap-8 sticky'>    
//             <div className='flex flex-col gap-4 items-start justify-start w-full md:w-6/12 sticky top-10 py-4 bg-gray-950'>
//                 <span className='px-4 py-1 rounded-full bg-gray-600 text-gray-400 text-sm'>2024</span>
//                 <h3 className='font-bold text-3xl text-gray-100'>TSR Oráculo - Web 3 Oracle Dapp</h3>
//                 <p className='text-gray-400 text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero natus, dignissimos nisi et suscipit deserunt facilis necessitatibus, optio accusantium possimus, enim maiores incidunt officia illo fuga corrupti corporis est veritatis. A libero unde sapiente veniam, velit, numquam sed ad dolorem eum pariatur tempora voluptates neque amet sequi, ullam reiciendis.</p>
//                 <div className='w-full'>
//                     <ul className='flex flex-col gap-2'>
//                         <li className='flex justify-between items-center text-gray-400 text-sm border-b-2 border-gray-600 py-2'><span className='text-xs text-gray-600'>Função</span><p>WebDesigner</p></li>
//                         <li className='flex justify-between items-center text-gray-400 text-sm border-b-2 border-gray-600 py-2'><span className='text-xs text-gray-600'>Entregáveis</span><p>Branding, UI, FrontEnd</p></li>
//                         <li className='flex justify-between items-center text-gray-400 text-sm border-b-2 border-gray-600 py-2'><span className='text-xs text-gray-600'>Empresa</span><p>Equipe Vale das Araucárias - Hackathon </p></li>
//                         <li className='flex justify-between items-center text-gray-400 text-sm border-b-2 border-gray-600 py-2'><span className='text-xs text-gray-600'>Mais detalhes</span><a href='/projeto' className='flex items-center gap-1 hover:text-secondary-400 duration-300'>Ver mais<PiArrowRight /></a></li>
//                     </ul>
//                 </div>
//             </div>
//             <div className='flex flex-col gap-4 items-center justify-start w-full md:w-5/12'>
//                 <img src={tsr01} alt='TSR' />
//                 <img src={tsr02} alt='TSR' />
//                 <img src={tsr03} alt='TSR' />
//             </div>
//         </div>
//   </section>
  )
}

export default RecentProjects