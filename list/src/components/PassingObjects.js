import PassingObjectsSupportOne from "./PassingObjectsSupportOne";

let someObject1 = {
  name: `Rohi`,
  profession: `Student`,
  purpose: `To be my own boss`,
  totalExperience: 0,
  numberOfHoursSleepingEveryDay: 7,
  lifeMotto: `Work as little as possible`
};

let someObject2 = {
  name: `Batman`,
  profession: `SuperHero`,
  purpose: `fight crime`,
  totalExperience: 69,
  numberOfHoursSleepingEveryDay: 0,
  lifeMotto: `I am Batman`
};

//rendered component

//InputThings.js
const PassingObjects = () => {
  //objects used

  const stuff = (
    <div>
      {/* <ShowSomeStuff someObject1 = {someObject1} someObject2 = {someObject2} /> */}
      <PassingObjectsSupportOne Object1={someObject1} Object2={someObject2} />
    </div>
  );

  return stuff;
};

export default PassingObjects;
