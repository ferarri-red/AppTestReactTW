import {FaFire} from 'react-icons/fa';
import {LuAperture, LuAnnoyed} from 'react-icons/lu';
import {TbBrandThreads} from 'react-icons/tb';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<FaFire size='28' />} />
            <SideBarIcon icon={<LuAnnoyed size='28' />} />
            <SideBarIcon icon={<LuAperture size='28' />} />
            <SideBarIcon icon={<TbBrandThreads size='28' />} />
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip idea' }) => (
    <div className="sidebar-icon group">
        {icon}

        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>

    </div>
)

export default SideBar;