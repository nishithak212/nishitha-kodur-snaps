import "../../components/Hero/Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <p className="hero__text--normal">
        <span className="hero__text--small">Our mission: </span>
        <br />
        Provide photographers a space to share photos of the neighborhoods they
        cherish,{" "}
        <span className="hero__text--italic">
          expressed in their unique style.
        </span>
      </p>
    </div>
  );
}
