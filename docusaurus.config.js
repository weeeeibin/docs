// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


import { themes as prismThemes, themes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "My Docs",
	tagline: "Dinosaurs are cool",
	favicon: "img/favicon.ico",
	// Set the production url of your site here
	url: "https://mrmd.xyz",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "zh-Hans",
		locales: ["zh-Hans"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					routeBasePath: "/markdown",
					editUrl: "https://github.com/weeeeibin/docs/blob/main/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "My Docs",
				logo: {
					alt: "My Docs Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "文档",
					},
					{
						href: "https://github.com/weeeeibin/docs",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
				defaultLanguage: 'javascript',
			},
			colorMode: {
				respectPrefersColorScheme: true,
			},
		}),
};

module.exports = config;
