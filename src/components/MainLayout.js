// MainLayout.js
const MainLayout = ({ children, showContent }) => {
    // ... your useState and other code ...

    return (
        <div className={`parent ${isDarkMode ? 'dark-mode' : ''}`}>
            {/* ... your other divs ... */}

            <div className="div4">
                {showContent && (
                    <>
                        <h1>Dmitr Cambur</h1>
                        <h2>Front-End Developer</h2>
                    </>
                )}
            </div>
            <div className="div5">
                {showContent && (
                    "In the dynamic world of digital landscapes, ..."
                )}
            </div>
            <div className="div6">
                {showContent && (
                    <ul className="portfolio-list">
                        {/* ... your links ... */}
                    </ul>
                )}
            </div>

            {/* ... your other divs ... */}

            {children}
        </div>
    );
}

export default MainLayout;
	