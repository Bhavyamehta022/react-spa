import { ChatText } from "./ChatText";
import { useState, useEffect } from "react";
export const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [myMsg, setMyMsg] = useState([]);
  const myMsgData = [
    {
      name: "Bhavya Mehta",
      text: myMsg,
      photo: "https://cdn-icons-png.flaticon.com/512/5231/5231020.png",
    },
  ];
  function generate() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }
  const fetchData = () => {
    //apicall
    const data = [
      {
        name: generate(),
        text: "I am a new user here and I love to listen to this lofi music while studyin.It helps me keep focus! Thanks!",
        photo: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
      },
    ];
    addNewMsg(data);
  };
  var nameList = [
    "Time",
    "Past",
    "Future",
    "Dev",
    "Fly",
    "Flying",
    "Soar",
    "Soaring",
    "Power",
    "Falling",
    "Fall",
    "Jump",
    "Cliff",
    "Mountain",
    "Rend",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gold",
    "Demon",
    "Demonic",
    "Panda",
    "Cat",
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Deeper",
    "Deepest",
    "Mine",
    "Your",
    "Worst",
    "Enemy",
    "Hostile",
    "Force",
    "Video",
    "Game",
    "Donkey",
    "Mule",
    "Colt",
    "Cult",
    "Cultist",
    "Magnum",
    "Gun",
    "Assault",
    "Recon",
    "Trap",
    "Trapper",
    "Redeem",
    "Code",
    "Script",
    "Writer",
    "Near",
    "Close",
    "Open",
    "Cube",
    "Circle",
    "Geo",
    "Genome",
    "Germ",
    "Spaz",
    "Shot",
    "Echo",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
    "Seal",
    "Squid",
    "Money",
    "Cash",
    "Lord",
    "King",
    "Duke",
    "Rest",
    "Fire",
    "Flame",
    "Morrow",
    "Break",
    "Breaker",
    "Numb",
    "Ice",
    "Cold",
    "Rotten",
    "Sick",
    "Sickly",
    "Janitor",
    "Camel",
    "Rooster",
    "Sand",
    "Desert",
    "Dessert",
    "Hurdle",
    "Racer",
    "Eraser",
    "Erase",
    "Big",
    "Small",
    "Short",
    "Tall",
    "Sith",
    "Bounty",
    "Hunter",
    "Cracked",
    "Broken",
    "Sad",
    "Happy",
    "Joy",
    "Joyful",
    "Crimson",
    "Destiny",
    "Deceit",
    "Lies",
    "Lie",
    "Honest",
    "Destined",
    "Bloxxer",
    "Hawk",
    "Eagle",
    "Hawker",
    "Walker",
    "Zombie",
    "Sarge",
    "Capt",
    "Captain",
    "Punch",
    "One",
    "Two",
    "Uno",
    "Slice",
    "Slash",
    "Melt",
    "Melted",
    "Melting",
    "Fell",
    "Wolf",
    "Hound",
    "Legacy",
    "Sharp",
    "Dead",
    "Mew",
    "Chuckle",
    "Bubba",
    "Bubble",
    "Sandwich",
    "Smasher",
    "Extreme",
    "Multi",
    "Universe",
    "Ultimate",
    "Death",
    "Ready",
    "Monkey",
    "Elevator",
    "Wrench",
    "Grease",
    "Head",
    "Theme",
    "Grand",
    "Cool",
    "Kid",
    "Boy",
    "Girl",
    "Vortex",
    "Paradox",
  ];
  const addNewMsg = (data) => {
    setMessages((message) => {
      let newData = [...data, ...message];
      newData = newData.splice(0, 10);
      console.log(newData[0]);
      return newData;
    });
  };
  useEffect(() => {
    const s = setInterval(() => {
      fetchData();
    }, 1000);
    return () => {
      clearInterval(s);
    };
  }, []);

  return (
    <div>
      <div className="chatWindow">
        {messages.map((msg) => {
          return <ChatText key={Math.random()} data={msg} />;
        })}
      </div>
      <div className="chatInput">
        <input value={myMsg} onChange={(e) => setMyMsg(e.target.value)}></input>
        <button
          onClick={() => {
            addNewMsg(myMsgData);
            setMyMsg([]);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};
