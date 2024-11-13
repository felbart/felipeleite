import { TbDeviceDesktopCode } from 'react-icons/tb'
import uft01 from '../assets/images/uft-01.png'
import tsr01 from '../assets/images/tsr-01.png'
import maisumdia01 from '../assets/images/mais-um-dia-01.png'
import { Link } from 'react-router-dom'

const ProjectsHome = () => {
  return (
    <section id="projects" className="container py-16 md:py-32 flex flex-col gap-8">
        <div className='flex flex-col gap-4 border-2 border-red-500 py-8'>
            <h3 className="text-5xl text-gray-100 font-extrabold tracking-tight uppercase">Alguns Projetos</h3>
            <span className="text-md font-mono text-secondary-400 uppercase tracking-wider">Projetos destaques desenvolvidos nos últimos anos</span>
        </div>
        <Link to='projeto'>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-6">
              <div className="flex gap-8 lg:gap-12 flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-clip group">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center justify-start">
                  <div className="w-full lg:min-w-[480px] min-w-[380px] h-[250px] md:h-full lg:h-[420px] overflow-clip">
                    <img
                    src={uft01}
                    width={420}
                    height={300}
                    alt="Universidade Federal do Tocantins"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-col gap-2 border-b pb-4 border-gray-800">
                    <div className="flex gap-2 items-center">
                      <TbDeviceDesktopCode
                        size={32}
                        className="text-gray-400 group-hover:text-secondary-500 duration-300"
                      />
                      <h3 className="text-gray-100 font-bold text-3xl group-hover:text-secondary-500 transition-colors">
                        Novo Portal UFT
                      </h3>
                    </div>
                    <span className="text-gray-200 text-base font-light">
                      Novo Portal da UFT aplicando o Design System do Governo Federal -
                      DSGov
                    </span>
                  </div>
                  <p className="text-gray-400 md:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    in delectus accusantium maiores temporibus nesciunt reiciendis?
                    Numquam eius illum dicta fuga assumenda repellendus, esse quo quidem
                    ex soluta? Distinctio quae non magni, quos fugit atque! Doloremque
                    voluptatem perferendis suscipit tempore, eveniet libero corporis
                    dolorem, pariatur sunt sapiente quae aperiam amet.
                  </p>
                  <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  </div>
                  {/* <Link href="/projects/" className="max-w-fit">
                    Ver Projeto
                    <FiArrowRight />
                  </Link> */}
                </div>
                </div>
              </div>
            </div>
        </Link>
        <Link to='projeto'>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-6">
              <div className="flex gap-8 lg:gap-12 flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-clip group">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center justify-start">
                  <div className="w-full lg:min-w-[480px] min-w-[380px] h-[250px] md:h-full lg:h-[420px] overflow-clip">
                    <img
                    src={tsr01}
                    width={420}
                    height={300}
                    alt="Universidade Federal do Tocantins"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-col gap-2 border-b pb-4 border-gray-800">
                    <div className="flex gap-2 items-center">
                      <TbDeviceDesktopCode
                        size={32}
                        className="text-gray-400 group-hover:text-secondary-500 duration-300"
                      />
                      <h3 className="text-gray-100 font-bold text-3xl group-hover:text-secondary-500 transition-colors">
                        Novo Portal UFT
                      </h3>
                    </div>
                    <span className="text-gray-200 text-base font-light">
                      Novo Portal da UFT aplicando o Design System do Governo Federal -
                      DSGov
                    </span>
                  </div>
                  <p className="text-gray-400 md:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    in delectus accusantium maiores temporibus nesciunt reiciendis?
                    Numquam eius illum dicta fuga assumenda repellendus, esse quo quidem
                    ex soluta? Distinctio quae non magni, quos fugit atque! Doloremque
                    voluptatem perferendis suscipit tempore, eveniet libero corporis
                    dolorem, pariatur sunt sapiente quae aperiam amet.
                  </p>
                  <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  </div>
                  {/* <Link href="/projects/" className="max-w-fit">
                    Ver Projeto
                    <FiArrowRight />
                  </Link> */}
                </div>
                </div>
              </div>
            </div>
        </Link>
        <Link to='projeto'>
            <div className="flex flex-col md:flex-row flex-wrap gap-x-4 gap-y-6">
              <div className="flex gap-8 lg:gap-12 flex-col md:flex-row bg-gray-900/50 rounded-xl overflow-clip group">
                <div className="flex flex-col md:flex-row gap-6 lg:gap-12 items-center justify-start">
                  <div className="w-full lg:min-w-[480px] min-w-[380px] h-[250px] md:h-full lg:h-[420px] overflow-clip">
                    <img
                    src={maisumdia01}
                    width={420}
                    height={300}
                    alt="Universidade Federal do Tocantins"
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-4">
                  <div className="flex flex-col gap-2 border-b pb-4 border-gray-800">
                    <div className="flex gap-2 items-center">
                      <TbDeviceDesktopCode
                        size={32}
                        className="text-gray-400 group-hover:text-secondary-500 duration-300"
                      />
                      <h3 className="text-gray-100 font-bold text-3xl group-hover:text-secondary-500 transition-colors">
                        App Mais um Dia
                      </h3>
                    </div>
                    <span className="text-gray-200 text-base font-light">
                      Novo Portal da UFT aplicando o Design System do Governo Federal -
                      DSGov
                    </span>
                  </div>
                  <p className="text-gray-400 md:text-base text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                    in delectus accusantium maiores temporibus nesciunt reiciendis?
                    Numquam eius illum dicta fuga assumenda repellendus, esse quo quidem
                    ex soluta? Distinctio quae non magni, quos fugit atque! Doloremque
                    voluptatem perferendis suscipit tempore, eveniet libero corporis
                    dolorem, pariatur sunt sapiente quae aperiam amet.
                  </p>
                  <div className="flex gap-x-3 gap-y-2 flex-wrap lg:max-w-[350px]">
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  <span className="text-secondary-400 bg-gray-800/80 text-sm py-1 px-3 rounded-md">
                      Tecnologia 01
                  </span>
                  </div>
                  {/* <Link href="/projects/" className="max-w-fit">
                    Ver Projeto
                    <FiArrowRight />
                  </Link> */}
                </div>
                </div>
              </div>
            </div>
        </Link>
    </section>
  )
}

export default ProjectsHome