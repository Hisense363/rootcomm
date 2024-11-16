import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-[#222c44] text-white relative h-24">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <svg
          className="w-24 h-24"
          viewBox="0 0 287 181"
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            fill="#CF6468"
            d="M205.529 27.682C205.529 27.6802 205.528 27.6787 205.526 27.6787H201.885C198.098 27.6787 195.033 24.61 195.033 20.82C195.033 17.029 191.967 13.9613 188.181 13.9613H184.594C180.806 13.9613 177.741 10.8926 177.741 7.10164V6.8521C177.748 3.06776 174.683 0 170.896 0H116.22C112.433 0 109.367 3.06777 109.367 6.8587V7.10917C109.367 10.9001 106.302 13.9679 102.515 13.9679H98.9279C95.1406 13.9679 92.0754 17.0366 92.0754 20.8266C92.0754 24.6175 89.0102 27.6853 85.2229 27.6853H81.5794C77.7921 27.6853 74.7269 30.754 74.7269 34.544V62.8168C74.7269 66.6068 77.7921 69.6755 81.5794 69.6755H85.2229C89.0102 69.6755 92.0754 72.7433 92.0754 76.5342V76.5982C92.0754 80.3892 95.1406 83.4569 98.9279 83.4569H188.181C191.967 83.4569 195.033 80.3892 195.033 76.5982V76.5342C195.033 72.7433 198.098 69.6755 201.885 69.6755H205.529C209.316 69.6755 212.382 66.6068 212.382 62.8168V34.544C212.382 30.7551 209.318 27.687 205.532 27.6853C205.531 27.6853 205.529 27.6838 205.529 27.682ZM127.76 33.4146H112.454C108.224 33.4146 104.794 36.8477 104.794 41.0821V56.4021C104.794 60.6356 108.224 64.0687 112.454 64.0687H127.76C131.99 64.0687 135.42 60.6356 135.42 56.4021V41.0821C135.42 36.8477 131.99 33.4146 127.76 33.4146ZM159.577 33.4146H174.883C179.113 33.4146 182.543 36.8477 182.543 41.0821V56.4021C182.543 60.6356 179.113 64.0687 174.883 64.0687H159.577C155.347 64.0687 151.918 60.6356 151.918 56.4021V41.0821C151.918 36.8477 155.347 33.4146 159.577 33.4146Z"
          />
          <path d="M16.0055 180.771C16.0055 180.773 16.0038 180.775 16.0017 180.775C13.131 180.773 10.7966 178.442 10.7966 175.561C10.7966 172.679 8.42432 170.347 5.54529 170.347C2.66532 170.347 0.20752 167.973 0.20752 165.047V111.529C0.20752 103.726 6.53067 97.3961 14.3262 97.3961C18.2283 97.3961 21.3865 100.557 21.3865 104.462V149.327C21.3865 155.177 26.1235 159.927 31.9756 159.927H53.3257C59.0782 159.927 63.7371 164.59 63.7371 170.347C63.7371 176.105 59.0782 180.767 53.3257 180.767H16.0093C16.0072 180.767 16.0055 180.769 16.0055 180.771Z" />
          <path d="M90.1036 180.768C90.1036 180.772 90.1004 180.775 90.0965 180.775C87.2273 180.772 84.8947 178.442 84.8947 175.562C84.8947 172.679 82.5225 170.348 79.6425 170.348C76.7635 170.348 74.3057 167.973 74.3057 165.048V113.117C74.3057 110.192 76.7202 107.817 79.6425 107.817C82.5657 107.817 84.8947 105.486 84.8947 102.604C84.8947 99.7215 87.2237 97.3892 90.1036 97.3892H127.424C133.175 97.3892 137.834 102.053 137.834 107.81C137.834 113.568 133.175 118.231 127.424 118.231H100.693C97.8202 118.231 95.4837 120.562 95.4837 123.444C95.4837 126.327 97.8137 128.658 100.693 128.658H106.252C112.004 128.658 116.663 133.322 116.663 139.079C116.663 144.836 112.004 149.5 106.252 149.5H100.693C97.8202 149.5 95.4837 151.831 95.4837 154.706C95.4837 157.582 97.8137 159.92 100.693 159.92H127.424C133.175 159.92 137.834 164.584 137.834 170.341C137.834 176.098 133.175 180.761 127.424 180.761H90.1107C90.1068 180.761 90.1036 180.765 90.1036 180.768Z" />
          <path d="M158.819 118.252C153.068 118.252 148.409 113.589 148.409 107.831C148.409 102.074 153.068 97.4106 158.819 97.4106H201.521C207.272 97.4106 211.931 102.074 211.931 107.831C211.931 113.589 207.272 118.252 201.521 118.252H196.054C193.132 118.252 190.759 120.627 190.759 123.552V170.183C190.759 176.033 186.022 180.783 180.17 180.783C174.318 180.783 169.58 176.041 169.58 170.183V123.552C169.58 120.627 167.208 118.252 164.286 118.252H158.819Z" />
          <path d="M227.844 139.096C227.844 139.094 227.842 139.093 227.84 139.093C224.919 139.091 222.506 136.717 222.506 133.793V113.123C222.506 110.198 224.92 107.824 227.844 107.824C230.766 107.824 233.095 105.492 233.095 102.61C233.095 99.7277 235.425 97.3962 238.304 97.3962H275.624C281.376 97.3962 286.035 102.059 286.035 107.817C286.035 113.574 281.376 118.237 275.624 118.237H248.893C246.021 118.237 243.684 120.568 243.684 123.451C243.684 126.333 246.014 128.665 248.893 128.665H270.244C273.116 128.665 275.453 130.997 275.453 133.879C275.453 136.761 277.825 139.093 280.704 139.093C283.584 139.093 286.042 141.467 286.042 144.392V165.061C286.042 167.987 283.627 170.362 280.704 170.362C277.782 170.362 275.453 172.693 275.453 175.575C275.453 178.458 273.123 180.789 270.244 180.789H232.924C227.171 180.789 222.513 176.126 222.513 170.368C222.513 164.611 227.171 159.948 232.924 159.948H259.654C262.527 159.948 264.863 157.616 264.863 154.734C264.863 151.852 262.534 149.528 259.654 149.528H238.304C235.431 149.528 233.095 147.196 233.095 144.314C233.095 141.433 230.725 139.101 227.847 139.099C227.845 139.099 227.844 139.098 227.844 139.096Z" />
          <path d="M37.2309 62.5339C37.2289 62.5274 37.2229 62.523 37.2162 62.523C34.3488 62.5169 31.9753 60.1878 31.9753 57.3093C31.9753 54.4271 29.6031 52.0956 26.7241 52.0956C23.8441 52.0956 21.3863 54.4704 21.3863 57.395V72.7649C21.3863 78.6152 16.6494 83.3647 10.7973 83.3647C4.94518 83.3647 0.214615 78.6227 0.214615 72.7725V26.4913C0.214615 11.8577 12.0619 0 26.6808 0H47.9454C50.8179 0 53.1544 2.33143 53.1544 5.21371C53.1544 8.09598 55.5266 10.4274 58.4066 10.4274C61.2856 10.4274 63.7434 12.8022 63.7434 15.7277V36.3895C63.7434 39.3151 61.3289 41.6889 58.4066 41.6889C55.4834 41.6889 53.1544 44.0213 53.1544 46.9036C53.1544 49.7858 55.5266 52.1173 58.4066 52.1173C61.2856 52.1173 63.7434 54.4911 63.7434 57.4167V72.7866C63.7434 78.6368 58.9134 83.3854 53.0688 83.3854C47.2233 83.3854 42.5719 78.7225 42.5719 72.9655V67.8441C42.5719 64.9232 40.1636 62.5509 37.2455 62.5447C37.2388 62.5447 37.2328 62.5403 37.2309 62.5339ZM26.5953 20.8407C23.7228 20.8407 21.3863 23.1731 21.3863 26.0553C21.3863 28.9376 23.7153 31.269 26.5953 31.269H37.3564C40.2288 31.269 42.5653 28.9376 42.5653 26.0553C42.5653 23.1731 40.2354 20.8407 37.3564 20.8407H26.5953Z" />
          <path d="M232.916 20.8407C227.165 20.8407 222.506 16.1778 222.506 10.4208C222.506 4.66286 227.165 0 232.916 0H275.617C281.369 0 286.028 4.66286 286.028 10.4208C286.028 16.1778 281.369 20.8407 275.617 20.8407H270.151C267.229 20.8407 264.856 23.2154 264.856 26.141V72.7725C264.856 78.6227 260.119 83.3712 254.266 83.3712C248.414 83.3712 243.677 78.6293 243.677 72.7725V26.141C243.677 23.2154 241.305 20.8407 238.383 20.8407H232.916Z" />
        </svg>
      </div>

      {/* Hamburger button - visible only on mobile */}
      <button
        className="fixed left-4 top-7 z-[51]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Hamburger icon when menu is closed
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#222c44] z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-200 ease-in-out`}
      >
        <div className="flex flex-col items-center pt-24 space-y-8">
          <a
            href="https://rootlets.community/rootlets-airdrops/"
            className="hover:text-blue-400 text-5xl"
          >
            Wall of Shame
          </a>
          <a href="x.com" className="hover:text-blue-400">
            <svg className="w-10 h-10" viewBox="0 0 300 271">
              {/* Your X/Twitter SVG */}
            </svg>
          </a>
        </div>
      </div>

      <nav className="flex justify-end h-full items-center">
        <ul className="flex space-x-6 md:mr-5 mr-6">
          <li>
            {/* X (Telegram) */}
            <a
              href="https://t.me/+sfHunAtee2NiZGY1"
              className="hover:text-blue-400 inline-flex items-center"
              target="_blank"
            >
              <svg
                className="w-12 h-12 m-auto"
                viewBox="0 0 300 271"
                fill="currentColor"
              >
                <path d="M222.51 19.53c-2.674.083-5.354.78-7.783 1.872-4.433 1.702-51.103 19.78-97.79 37.834C93.576 68.27 70.25 77.28 52.292 84.2 34.333 91.12 21.27 96.114 19.98 96.565c-4.28 1.502-10.448 3.905-14.582 8.76-2.066 2.428-3.617 6.794-1.804 10.53 1.812 3.74 5.303 5.804 10.244 7.69l.152.058.156.048c17.998 5.55 45.162 14.065 48.823 15.213.95 3.134 12.412 40.865 18.65 61.285 1.602 4.226 6.357 7.058 10.773 6.46.794.027 2.264.014 3.898-.378 2.383-.57 5.454-1.924 8.374-4.667l.002-.002c4.153-3.9 18.925-18.373 23.332-22.693l48.27 35.643.18.11s4.368 2.894 10.134 3.284c2.883.195 6.406-.33 9.455-2.556 3.05-2.228 5.25-5.91 6.352-10.71 3.764-16.395 29.428-138.487 33.83-158.837 2.742-10.348 1.442-18.38-3.7-22.872-2.59-2.26-5.675-3.275-8.827-3.395-.394-.015-.788-.016-1.183-.004zm.545 10.02c1.254.02 2.26.365 2.886.91 1.252 1.093 2.878 4.386.574 12.944-12.437 55.246-23.276 111.71-33.87 158.994-.73 3.168-1.752 4.323-2.505 4.873-.754.552-1.613.744-2.884.658-2.487-.17-5.36-1.72-5.488-1.79l-78.207-57.745c7.685-7.266 59.17-55.912 87.352-81.63 3.064-2.95.584-8.278-3.53-8.214-5.294 1.07-9.64 4.85-14.437 7.212-34.79 20.36-100.58 60.213-106.402 63.742-3.04-.954-30.89-9.686-49.197-15.332-2.925-1.128-3.962-2.02-4.344-2.36.007-.01.002.004.01-.005 1.362-1.6 6.97-4.646 10.277-5.807 2.503-.878 14.633-5.544 32.6-12.467 17.965-6.922 41.294-15.938 64.653-24.97 32.706-12.647 65.46-25.32 98.137-37.98 1.617-.75 3.12-1.052 4.375-1.032zM100.293 158.41l19.555 14.44c-5.433 5.32-18.327 17.937-21.924 21.322l2.37-35.762z" />
              </svg>
            </a>
          </li>
          <li>
            {/* X (Twitter) */}
            <a
              href="https://x.com/root_community"
              className="hover:text-blue-400 inline-flex items-center"
              target="_blank"
            >
              <svg
                className="w-10 h-10 m-auto"
                viewBox="0 0 300 271"
                fill="currentColor"
              >
                <path d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
