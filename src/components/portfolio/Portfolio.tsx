import "./Portfolio.scss";

import ScrollAnimation from "react-animate-on-scroll";

import ProjectItem from "./projectItem/ProjectItem";

const projects: {
	title: string;
	desc: string;
	image?: string;
	technologies: string[];
	youtubeLink?: string;
	links: string[];
	date: string;
}[] = [
	{
		title: "campass",
		desc: "campass is a system that simplifies the process of inviting and admitting guests to various events.\nUsers can easily invite their guests to an event by adding them to the system, invited guests can then log in to the system to get their entry pass as a QR code which can be scanned at the event entrance to let them in.",
		image: "/assets/media/campass_img_1.webp",
		technologies: [
			"Node.js",
			"React",
			"Fastify",
			"TypeScript",
			"Sqlite",
			"Sass",
			"Docker",
		],
		links: ["Github@https://github.com/nktfh100/campass"],
		date: "March 2024",
	},
	{
		title: "Super Gobblet Online",
		desc: "A real-time multiplayer app that features a unique twist on the classic tic-tac-toe game.\nDesigned by Roye Fire Explosion.",
		image: "/assets/media/gobblet_img_1.webp",
		technologies: [
			"React Native",
			"JavaScript",
			"MongoDB",
			"Socket.io",
			"Node.js",
			"Zustand",
			"Expo",
		],
		links: [
			"Google Play@https://play.google.com/store/apps/details?id=com.nktfh100.supergobbletonline",
			"Github@https://github.com/nktfh100/super-gobblet-online",
		],
		date: "August 2021",
	},
	{
		title: "Taki Online",
		desc: "A digital version of Taki, the popular card game, played online with other players in real-time.\nThis is my first attempt at creating a multiplayer game.",
		image: "/assets/media/taki_img_1.webp",
		technologies: ["React", "Node.js", "Socket.io"],
		links: ["Website@https://taki-online.nktfh100.com/"],
		date: "January 2021",
	},
	{
		title: "Music Player",
		desc: "A fully functional local music player that allows you to download songs from YouTube.",
		image: "/assets/media/music_player_img_1.webp",
		technologies: ["JavaScript", "React", "Electron"],
		links: [],
		date: "August 2019",
	},
	{
		title: "KritzCoin",
		desc: "A virtual currency bot I was commissioned to develop where users can buy and sell items from each other using their coins.",
		image: "/assets/media/kritzcoin_img.webp",
		technologies: ["JavaScript", "Node.js", "MySQL"],
		links: [],
		date: "July 2021",
	},
	{
		title: "Among Us in Minecraft",
		desc: "The popular game 'Among Us' made into a minecraft plugin.\n In the video, you can see topstrix, a popular youtuber, playing with the plugin.",
		youtubeLink: "https://www.youtube.com/embed/lvaesLLZ4EU",
		technologies: ["Java"],
		links: [
			"SpigotMC@https://www.spigotmc.org/resources/imposters-minigame-1-16-1-16-5.86051/",
			"Github@https://github.com/nktfh100/among-us-mc",
		],
		date: "November 2020",
	},
];

export default function Portfolio() {
	return (
		<div id="portfolio" className="portfolio-container">
			<div className="content-container">
				<h1 className="title">Projects</h1>
				<div className="content">
					{projects.map((project, index) => {
						return (
							<ScrollAnimation
								animateIn={
									index % 2 == 0
										? "animate__slideInLeft"
										: "animate__slideInRight"
								}
								duration={1.4}
								offset={50}
								animateOnce={true}
								initiallyVisible={false}
							>
								<ProjectItem
									key={index}
									isLeft={index % 2 == 0}
									title={project.title}
									description={project.desc}
									image={project.image}
									youtubeLink={project.youtubeLink}
									technologies={project.technologies}
									links={project.links}
									date={project.date}
								/>
							</ScrollAnimation>
						);
					})}
				</div>
			</div>
		</div>
	);
}
