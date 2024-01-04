import HomeNav from "./HomeNav";

function Home() {
  return (
    <div className={"flex flex-col h-screen w-full"}>
      <HomeNav />
      <div className="flex h-5/6 p-5 gap-16 justify-center items-center">
        <img
          src={
            "https://hips.hearstapps.com/hmg-prod/images/mental-fitness-sessions-1674144770.jpg?resize=1200:*"
          }
          alt={"Splash screen picture."}
          className={"h-[34em] w-auto border-4 rounded-2xl"}
        />
        <p className={"w-[28em] text-3xl"}>
          Welcome to Fitness App, your ultimate fitness companion! Whether
          you're a seasoned athlete or just starting your wellness journey, our
          app is designed to empower you to achieve your fitness goals and lead
          a healthier lifestyle. With personalized workout plans, comprehensive
          tracking tools, and a supportive community, Fitness App is here to
          guide you every step of the way towards a fitter, stronger, and more
          vibrant you. Get ready to sweat, inspire, and transform with us!
        </p>
      </div>
    </div>
  );
}

export default Home;
