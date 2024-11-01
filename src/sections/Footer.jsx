const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex ">
                <p>✨ Thank you for scrolling all the way! ✨</p>

            </div>

            <div className="flex gap-3">

                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                   className="social-icon transform transition duration-200 hover:scale-110 hover:cursor-pointer">
                    <img src="/assets/github.svg" alt="github" className="w-6 h-6"/>
                </a>



                <a href="https://www.linkedin.com/in/prdm/" target="_blank" rel="noopener noreferrer"
                   className="social-icon transform transition duration-200 hover:scale-110 hover:cursor-pointer">
                    <img src="/assets/linkedin.svg" alt="linkedIn" className="w-6 h-6"/>
                </a>
                <a href="https://leetcode.com/u/priyadeepmullick/" target="_blank" rel="noopener noreferrer"
                   className="social-icon transform transition duration-200 hover:scale-110 hover:cursor-pointer">
                    <img src="/assets/leetcode.svg" alt="linkedIn" className="w-6 h-6"/>
                </a>
            </div>

            <p className="text-white-500">© {new Date().getFullYear()} Priyadeep Mullick. All rights reserved.</p>
        </footer>
    );
};

export default Footer;