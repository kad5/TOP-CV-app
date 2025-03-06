import { Link } from "react-router-dom";
export default function MainPage({ startNewCanvas }) {
  return (
    <main>
      <section className="hero">
        <h1>CV Wizard</h1>
        <p>Create elegant, high quality resume pages fast with ease</p>
        <div>
          <button onClick={startNewCanvas} className="shiny-text">
            Start Now
          </button>
          <p>or read more below</p>
        </div>
      </section>
      <section className="purpose">
        <h2>
          Your profissional CV in <span>3 easy steps</span>
        </h2>
        <div>
          <div>
            <h3>
              Step 1: <span>Choose a general template</span>
            </h3>
            <div>gif imge</div>
          </div>
          <div>
            <h3>
              Step 2: <span>Fill it out using our modular CV components</span>
            </h3>
            <div>gif imge</div>
          </div>
          <div>
            <h3>
              Step 3: <span>Download your CV as a pdf</span>
            </h3>
            <div>gif imge</div>
          </div>
        </div>
      </section>
      <section className="convert">
        <h2>
          Want to keep track of your CV drafts for later moidfying or updating?
        </h2>
        <h3 className="shiny-text">Create an account now, it's FREE</h3>
        <Link to="signup">Claim your free Account</Link>
      </section>
      <section className="test">
        <h2>Take a look at what our users say</h2>
        <div>
          <div>
            <h3>Marcus Aulrelius</h3>
            <p>Simply the 🔥🔥</p>
          </div>
          <div>
            <h3>Max Verstappen</h3>
            <p>
              The best tool out there !! I was able to have it ready for my job
              interview in no time
            </p>
          </div>
          <div>
            <h3>John Bones Jones</h3>
            <p> Fast easy, does the job. 5 / 5</p>
          </div>
        </div>
      </section>
    </main>
  );
}
