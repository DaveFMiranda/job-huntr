import React from "react";
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa";
import zac from "/zac.jpg?url";
import dave from "/dave.png?url";
import ivy from "/ivy.jpg?url";
import chris from "/chris.png?url";
import hailey from "/hailey.jpg?url";

const AboutPage = () => {
  return (
    <>
      <div className="about-title">Meet Our Team!</div>
      <section className="developers">
        <card className="hailey">
          <div className="dev-name">Hailey Hughes</div>
          <div className="dev-pic">
            <img src={hailey} alt="My Image" />
          </div>
          <div className="dev-creds">
            <p>
            Hello, and welcome! My name is <span>Hailey</span>. I am mom to one very energetic seven year old, committed partner to the love of my life, and OG Swiftie. My love of learning has led me on a journey rich in information ranging from my time studying Mathematics and Spanish in my undergraduate programs, Change Systems in my graduate program and most recently, software engineering.</p>
<p>10 years in education has empowered me with the resilience and determination needed to produce clear, efficient and scalable code. I am well versed in solving complex problems through the collaboration of ideas and diverse experience. What has drawn me to programming is the vastness in possibility.</p>
<p>What has helped me persist is the work I have accomplished alongside veteran and emerging developers. What I can dream up pales in comparison to what the collective can envision and, together, accomplish. My collaborative skills are an asset in navigating complex technical problems. My resourcefulness enhances my adaptability as new needs require creative trouble-shooting. More than all of this, my commitment to continuous learning and improvement serves as the cornerstone for my professional growth.
            </p>
            <ul>
              <li>
                <a href="https://github.com/haileyraehughes89">
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hailey-hughes-039382206">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </card>
        <card className="dave">
          <div className="dev-name">Dave Miranda</div>
          <div className="dev-pic">
            <img src={dave} alt="My Image" />
          </div>
          <div className="dev-creds">
            <p>
              <span>Dave Miranda</span> is a devoted father to his two sons, 5
              and 3 years old. Their favorite things to do together include
              Legos, building forts, indoor playgrounds, and children's museums.
              When he's not playing with his kids, Dave enjoys learning new
              things, self-improvement, winning his fantasy football league more
              often than not, and Wordle.
            </p>
            <p>
              A native Chicagoan and avid football watcher, Dave should be a
              Bears fan but they're just such a poorly-run franchise year in and
              year out, so he also roots for the Chiefs for two reasons: #1 He
              moved to the KC area in 2016, and #2 He cruised to a dominant
              fantasy football championship in 2018 after drafting the
              previously unheralded duo of Patrick Mahomes and Tyreek Hill.
            </p>
            <p>
              Prior to learning to code, Dave ran political campaigns for about
              a decade. In 2018 he started a consulting firm and managed six
              candidates and a staff of several dozen campaign workers. He has
              run campaigns with budgets ranging from $30,000 to $500,000.
              Before his political career, Dave worked in corporate public
              relations.
            </p>
            <ul>
              <li>
                <a href="https://github.com/DaveFMiranda">
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dave-m-9463327">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </card>
        <card className="hailey">
          <div className="dev-name">Ivy McCurdy</div>
          <div className="dev-pic">
            <img src={ivy} alt="My Image" />
          </div>
          <div className="dev-creds">
            <p>
              Hello there! I'm <span>Ivy McCurdy</span> – a versatile individual
              whose life is a canvas painted with endless creativity and an
              unyielding passion for storytelling. You'll often find me savoring
              a nice cup of coffee, a ritual that bookends my days with comfort
              and inspiration. In those tranquil moments, I share my world with
              my cat Jiji, my lovely furbaby.
            </p>
            <p>
              But where I truly come alive is in the realm of imagination. I
              love to breathe life into my artistic visions on both canvas and
              screen. My heart beats for art, and I pour my soul into every
              stroke, line, and hue. This unquenchable thirst for creative
              expression has led me to master the dance of lines and colors, a
              testament to my unwavering commitment to honing my craft.
            </p>
            <p>
              Beyond the confines of my creative space, the digital landscapes
              of video games become my playground of fulfillment. From exploring
              expansive worlds to embarking on epic quests and immersing myself
              in interactive narratives, video games provide me with a sanctuary
              to unwind and rediscover inspiration anew.
            </p>
            <ul>
              <li>
                <a href="https://github.com/IvySMac">
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ivy-mccurdy">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </card>
        <card className="chris">
          <div className="dev-name">Christopher Tsang</div>
          <div className="dev-pic">
            <img src={chris} alt="My Image" />
          </div>
          <div className="dev-creds">
            <p>
              Hello, I'm <span>Christopher Tsang</span>! I am a Full-Stack
              Developer and Audio Engineer with a passion for solving problems.
              I enjoy working on challenging projects that require me to think
              outside the box and come up with innovative solutions. I have
              experience in IT support and am reliable, ensuring that I always
              meet my deadlines and deliver high-quality work. My attention to
              detail and sharp technical skills enable me to create efficient
              and effective solutions.
            </p>
            <p>
              {" "}
              In my free time, I love playing table tennis, tennis, NBA2k23, and
              MOBA type games. I find that sports and gaming are a great way to
              stay active, improve my reflexes, and have fun. When I'm not
              competing on the court or in the virtual world, you can find me
              exploring new technologies, playing music, or hiking in the great
              outdoors.
            </p>
            <p>
              {" "}
              I am excited to bring my skills and experience to new projects and
              collaborate with like-minded individuals. Whether it's solving
              complex technical challenges or mastering the latest game, I'm
              always up for a good challenge!
            </p>
            <ul>
              <li>
                <a href="https://github.com/wontonchris">
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/christopher-tsang-97710386">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </card>
        <card className="ivy">
          <div className="dev-name">Zac Wheeler</div>
          <div className="dev-pic">
            <img src={zac} alt="My Image" />
          </div>
          <div className="dev-creds">
            <p>
              Hello! I'm <span>Zac Wheeler</span>, a devoted husband and a proud
              father of two amazing kids—a lively 6-year-old and an adorable
              2-year-old. As a family man, I find immense joy in spending
              quality time with my loved ones. Whether we're embarking on
              outdoor adventures, engaging in playful board games, or simply
              enjoying each other's presence at home, family always comes first.
            </p>

            <p>
              When I'm not wearing my dad hat, you'll likely find me indulging
              in two of my passions: movies and 3D printing. As a film
              enthusiast, I relish movie nights with a big bowl of popcorn in
              hand. From timeless classics to the latest blockbusters, count me
              in! On the creative front, I'm also an enthusiastic 3D printing
              aficionado. There's something uniquely satisfying about
              transforming digital designs into tangible objects, and I'm
              constantly tinkering with my printer, turning ideas into reality.
            </p>

            <p>
              Life is a delicate balance, and for me, that entails treasuring
              family moments, immersing myself in cinematic wonders, and diving
              into the world of 3D printing!
            </p>
            <ul>
              <li>
                <a href="https://github.com/ZacWheeler3">
                  <GithubIcon />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zac-wheeler-76335b180">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </card>
      </section>
    </>
  );
};
export default AboutPage;
