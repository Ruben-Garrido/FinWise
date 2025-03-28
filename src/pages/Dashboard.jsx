import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DbInicio } from '../components/DbInicio';
import { DbPlanificador } from '../components/DbPlanificador';
import { DbAñadirMetas } from '../components/DbAñadirMetas';
import { DbAñadirRecordatorio } from '../components/DbAñadirRecordatorio';
import { FaDollarSign } from "react-icons/fa6";
import { Messages } from '../components/Messages';
import { ModeNigth } from '../components/ModeNigth';
import { UserName } from '../components/UserName';

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('inicio');

  const contentMap = {
    inicio: <DbInicio />,
    planificador: <DbPlanificador />,
    'añadir-Metas': <DbAñadirMetas />,
    'añadir-Recordatorios': <DbAñadirRecordatorio />
  };

  return (
    <div className='content-dashboard flex flex-col md:flex-row w-full'>
      <header className='bg-[#ffffff] fixed top-0 w-full h-16 md:h-20 p-4 flex items-center'>
        <h1 className='text-black uppercase font-bold text-base md:text-2xl tracking-[1px] md:tracking-[4px]'>JT logo</h1>
        <nav className='flex-1 flex justify-center'>
          <ul className='flex flex-row flex-wrap justify-center space-x-4 text-sm md:text-base'>
            {Object.keys(contentMap).map((key) => (
              <li key={key}>
                <Link
                  to="#"
                  className={`text-[#465FFF] hover:underline hover:decoration-[#465FFF] ${activeContent === key ? 'underline decoration-[#ecf3ff]' : ''}`}
                  onClick={() => setActiveContent(key)}
                >
                  {key.replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <UserName />
          <ModeNigth />
        </div>
      </header>

      <main className='mt-[4rem] md:mt-[5rem] p-4 md:p-8 bg-[#E5E7EB] min-h-screen w-full'>
        <div className='flex items-center space-x-2'>
          <FaDollarSign className='text-lg md:text-xl' />
          <h1 className='text-base md:text-lg'>Fondos</h1>
        </div>
        {contentMap[activeContent]}
      </main>

      <div className='fixed bottom-4 right-4'>
        <Messages />
      </div>
    </div>
  );
};

export default Dashboard;