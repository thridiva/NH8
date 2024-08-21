export function IntroImg() {
  return (
    <div className="header-image-container">
      <img
        className="header-image"
        src="/imgs/restaurant.jpg"
        alt="restaurant-img"
      />
      <div className="overlay-intro-img"></div>
      <p className="text-intro-img">- Hundreds of flavors under one roof</p>
    </div>
  );
}
