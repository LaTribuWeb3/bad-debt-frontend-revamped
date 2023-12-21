import { FaMediumM, FaGithub } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-white dark:bg-darkThemeBg p-4">
            <p className="text-center font-bold mb-2">Join the DAO</p>
            <div className="flex justify-center space-x-4">
                <a href="https://twitter.com/risk_dao" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter className="text-gray-900 dark:text-gray-200 text-3xl" />
                </a>
                <a href="https://discord.com/invite/NYyeDQDDvM" target="_blank" rel="noopener noreferrer">
                    <IoLogoDiscord className="text-gray-900 dark:text-gray-200 text-3xl" />
                </a>
                <a href="https://medium.com/risk-dao" target="_blank" rel="noopener noreferrer">
                    <FaMediumM className="text-gray-900 dark:text-gray-200 text-3xl" />
                </a>
                <a href="https://github.com/Risk-DAO/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-gray-900 dark:text-gray-200 text-3xl" />
                </a>
            </div>
        </footer>
    );
}
