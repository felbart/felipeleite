import logo from '../assets/images/logo.svg';
import { NAVIGATION_LINKS } from '../constants';
import { SOCIAL_MEDIA_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-20 flex flex-col items-center justify-between min-h-96">
        <div className="container flex flex-row py-4 items-start justify-between">
          <div className="flex flex-col justify-start items-start w-3/6">
            <img src={logo} alt="Felipe Leite" />
          </div>
          <div className="flex flex-col justify-start items-start w-3/6 gap-4">
          <span className='text-lg font-semibold text-gray-400 uppercase'>Navegação</span>
            <ul className='flex flex-col items-start justify-center gap-2'>
              {NAVIGATION_LINKS.map((item, id) => (
              <li key={id} className='text-md text-gray-600 uppercase'><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start w-3/6 gap-4">
          <span className='text-lg font-semibold text-gray-400 uppercase'>Navegação</span>
          <ul className='flex flex-row items-start justify-center gap-2'>
            {SOCIAL_MEDIA_LINKS.map((social, id) => (
              <li key={id} className='text-md text-gray-600 uppercase'><a href={social.href}><i>{social.icon}</i></a></li>
            ))}
          </ul>  
          </div>
        </div>
        <div className="h-24 border-t-2 border-gray-800 w-full py-2">
            <div className="container"><span className="text-sm text-gray-600">Felipe Leite Designer - Todos os direitos reservados</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer