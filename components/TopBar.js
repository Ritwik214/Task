import SocialIcons from "./SocialIcons";

const TopBar = ({ topbarIcon = true, darkLogo = true }) => {
  return (
    <div className="iknow_tm_topbar" data-position="absolute">
      <div className="container">
        <div className="topbar_inner">
          <div className="logo">
            <a href="#">
              {darkLogo ? (
                <img src="/img/logo/dark.png" alt="logo" />
              ) : (
                <img src="/img/logo/light.png" alt="logo" />
              )}
            </a>
          </div>
          <div className="right">
            {topbarIcon && <SocialIcons />}
                      </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
