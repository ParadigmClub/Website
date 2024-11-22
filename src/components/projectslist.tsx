import streetscout from "../../public/streetscout.png";
import cybersec from "../../public/cybersec.png";
import dondaposter from "../../public/dondaposter.png";
import botwebsite from "../../public/botwebsite.png";
import letithappen from "../../public/letithappen.png";
import whisperingshadows from "../../public/whisperingshadows.png";

export const projects = [
	{
		name: "StreetScout",
		description:
			"A mobile app for reporting and tracking damage to public property reducing the time taken to repair and maintain it. Made for ease of convenience for the public and the authorities. ",
		type: "github",
		link: "https://github.com/whirlxd/streetscout",
		image: streetscout,
		tags: ["React Native", "Node.js", "MongoDB"],
	},
	{
		name: "Whispering Shadows",
		description:
			"A short film dwelling into the old noir and mystery genre in a modern setting inspired by dan brown. Shot on a phone and edited on AfterEffects",
		type: "video",
		link: "https://youtu.be/prYMnHcOdxc?si=9mitCCHtxXZwOKQ3",
		image: whisperingshadows,
		tags: ["Film", "AfterEffects", "DSLR"],
	},
	{
		name: "Let it Happen",
		description:
			"A short film devoid of dialogue exploring the ramifications of social media addiction and the importance of living in the moment. Shot on a phone and edited on AfterEffects",
		type: "video",
		link: "https://youtu.be/UJuWCahC4Uc?si=VzNr8VRu5hRPF4P8",
		image: letithappen,
		tags: ["Film", "DSLR", "AfterEffects"],
	},
	{
		name: "Cyber Security 	101",
		description: "Website crafted to educate beginners about cybersecurity",
		type: "github",
		link: "https://github.com/ParadigmClub/Cyber-Security-101",
		image: cybersec,
		tags: ["React", "Tailwind", "Cybersecurity"],
	},
	{
		name: "Donda Poster",
		description:
			"A self made version of the Donda album cover made for the wartex 10.0 event on photoshop",
		type: "behance",
		link: "https://media.discordapp.net/attachments/1159888188228259930/1299111602452299888/Untitled54_20241025021527.jpg?ex=673afeb6&is=6739ad36&hm=034134f6cf45fe3571683d70dd7ba9ebfc66c8629f625016c023a897546de852&=&format=webp&width=540&height=702",
		image: dondaposter,
		tags: ["GFX", "Ps", "Design"],
	},
	{
		name: "BOT2K24 Website",
		description:
			"The official website of the BOT2K24 event held on 8th august 2024",
		type: "github",
		link: "https://github.com/paradigmclub/botwebsite",
		image: botwebsite,
		tags: ["React", "Tailwind", "DaisyUI"],
	},
];
