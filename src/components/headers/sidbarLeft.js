const SidbarLeft = () => {
    return (
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 ">
            <div className="md:mt-12 md:w-48 md:top-0 md:left-0 md:fixed content-center md:content-start text-left justify-between">
                <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
                    <li className="mr-3 flex-1"><a className="block py-1 md:py-3 pl-1 text-white hover:border-b-2 hover:border-purple-600 w-full " href=""> <i class="fas fa-tasks pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Tasks</span></a></li>
                    <li className="mr-3 flex-1"><a className="block py-1 md:py-3 pl-1 text-white hover:border-b-2 hover:border-purple-600 w-full " href=""> <i class="fa fa-envelope pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Messages</span></a></li>
                    <li className="mr-3 flex-1"><a className="block py-1 md:py-3 pl-1 text-white hover:border-b-2 hover:border-purple-600 w-full " href=""> <i class="fas fa-chart-area pr-0 md:pr-3 text-blue-600"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span></a></li>
                    <li className="mr-3 flex-1"><a className="block py-1 md:py-3 pl-1 text-white hover:border-b-2 hover:border-purple-600 w-full " href=""><i class="fa fa-wallet pr-0 md:pr-3"></i><span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Payments</span></a></li>
                </ul>
            </div>
        </div>
    )
}
export default SidbarLeft;