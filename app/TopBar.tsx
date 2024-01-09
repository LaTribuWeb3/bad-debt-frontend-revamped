import { FaMediumM, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoDiscord } from 'react-icons/io5';
export default function TopBar() {
  return (
    <div className="fixed top-0 right-0 p-2 md:p-4 flex space-x-1 md:space-x-4">
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
  );
}
