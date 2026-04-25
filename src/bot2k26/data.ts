export interface Event {
	id: string;
	name: string;
	category: string;
	description: string;
	gridSpan: { col: number; row: number };
	resourceUrl: string;
	rulesUrl: string;
	faqUrl: string;
	formUrl: string;
	featured: boolean;
}

export interface TeamMember {
	name: string;
	role: string;
	tier: "president" | "vp" | "lead";
	image: string;
}

export interface SiteMeta {
	subtitle: string;
	dates: string;
	contactEmail: string;
	teacherInChargeName: string;
	teacherInChargePhone: string;
	socialLinks: { label: string; url: string }[];
}

export const categories = [
	"Cybersecurity / Strategy",
	"Hardware / Robotics",
	"Development / Innovation",
	"Creative / Media",
] as const;

export const events: Event[] = [
	{
		id: "cryptic-hunt",
		name: "Cryptic Hunt",
		category: "Cybersecurity / Strategy",
		description: "A multi-round cryptographic puzzle hunt testing logic, ciphers, and lateral thinking.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "breach",
		name: "Breach",
		category: "Cybersecurity / Strategy",
		description: "DEF CON style live cybersecurity challenge. Attack, defend, and exploit.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "intercept",
		name: "Intercept",
		category: "Cybersecurity / Strategy",
		description: "Counter-intelligence stream. Decode, intercept, and neutralize.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "robo-race",
		name: "Robo Race",
		category: "Hardware / Robotics",
		description: "Build and race a line-following robot through a timed obstacle course.",
		gridSpan: { col: 1, row: 2 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "hackathon",
		name: "Hackathon",
		category: "Development / Innovation",
		description: "On-site BYOD hackathon. Build a working prototype in limited hours.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: true,
	},
	{
		id: "pitching",
		name: "Pitch It",
		category: "Development / Innovation",
		description: "Pitch your startup idea to a panel. Clarity, viability, and impact matter.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "photography",
		name: "Photography",
		category: "Creative / Media",
		description: "On-theme photography competition judged on composition, story, and technique.",
		gridSpan: { col: 2, row: 2 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: true,
	},
	{
		id: "photoshop",
		name: "Photoshop",
		category: "Creative / Media",
		description: "Digital manipulation challenge. Given assets, create something extraordinary.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "digital-art",
		name: "Digital Art",
		category: "Creative / Media",
		description: "Original digital illustration. Any tool, any style, one theme.",
		gridSpan: { col: 1, row: 2 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
	{
		id: "filmmaking",
		name: "Filmmaking",
		category: "Creative / Media",
		description: "Short film competition. Story, cinematography, and editing under a time cap.",
		gridSpan: { col: 1, row: 1 },
		resourceUrl: "#",
		rulesUrl: "#",
		faqUrl: "#",
		formUrl: "#",
		featured: false,
	},
];

export const team: TeamMember[] = [
	{ name: "President Name", role: "President", tier: "president", image: "" },
	{ name: "VP Name 1", role: "Vice President", tier: "vp", image: "" },
	{ name: "VP Name 2", role: "Vice President", tier: "vp", image: "" },
	{ name: "Lead 1", role: "Tech Lead", tier: "lead", image: "" },
	{ name: "Lead 2", role: "Design Lead", tier: "lead", image: "" },
	{ name: "Lead 3", role: "Events Lead", tier: "lead", image: "" },
	{ name: "Lead 4", role: "Cybersecurity Lead", tier: "lead", image: "" },
	{ name: "Lead 5", role: "Media Lead", tier: "lead", image: "" },
	{ name: "Lead 6", role: "Robotics Lead", tier: "lead", image: "" },
	{ name: "Lead 7", role: "Content Lead", tier: "lead", image: "" },
	{ name: "Lead 8", role: "Operations Lead", tier: "lead", image: "" },
	{ name: "Lead 9", role: "Outreach Lead", tier: "lead", image: "" },
	{ name: "Lead 10", role: "Photography Lead", tier: "lead", image: "" },
];

export const siteMeta: SiteMeta = {
	subtitle: "Mayoor School, Noida's Annual Tech Fest",
	dates: "Date TBA",
	contactEmail: "paradigm@example.com",
	teacherInChargeName: "Teacher In-Charge Name",
	teacherInChargePhone: "+91 XXXXX XXXXX",
	socialLinks: [],
};
