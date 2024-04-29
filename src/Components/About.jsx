import React from "react";

function About() {
  return (
    <div className="bg-headerbg/30 backdrop-blur drop-shadow rounded">
      <h2 className="text-xl py-4 px-5">About Me</h2>
      <section className="bg-contentbg/30 px-5 py-4 text-md">
        <p className="mb-4">
          I love designing, creating, and iterating through experiences to try and maximize interactivity and fun! This passion started in my high school's
          FIRST robotics team. I loved the process of forming ideas into reality to create highly performant and efficient systems. Robotics tends to be quite
          expensive, so software and comptuer graphics is where I ended up migrating to! I love solving puzzles, writing efficient code, and playing/making
          passionate indie games!
        </p>
        <p className="mb-4">
          I have learned the most from my experience working in various startups like <span className="text-cyan-300 font-semibold">pHin</span> (now closed),{" "}
          <span className="text-cyan-300 font-semibold">OneText</span>, and a company that I co-founded{" "}
          <span className="text-cyan-300 font-semibold">Poisson Games</span>. I'm currently working at{" "}
          <span className="text-cyan-300 font-semibold">Intel</span> as a Building Technician and spend a lot of my off time working on solo programming
          projects.
        </p>
        <p className="mb-4">
          I tend to prefer working in full stack environments, as I really value knowing the entire top-to-bottom flow of a system. That way I can try account
          for edge cases and potential issues ahead of time, which I like to think I'm quite good at doing.
        </p>
        <p>While I'm not on the computer, I like to explore the great outdoors, go rock climbing gym, or play with my cat Mimi!</p>
      </section>
    </div>
  );
}

export default About;
