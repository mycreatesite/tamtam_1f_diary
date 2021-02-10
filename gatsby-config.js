require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
	siteMetadata: {
		title: `TAMTAM ONE-PHRASE DIARY - たむたむのひとこと日記`,
		titleTemplate: `%s · TAMTAM ONE-PHRASE DIARY - たむたむのひとこと日記`,
		lang: `ja`,
		description: `世界一かわいい生き物であるネザーランドドワーフのたむたむ（♂）がひとりごちるブログです。`,
		author: `たむたむ`,
		url: `https://tamtam-1p-diary.netlify.app/`,
		siteUrl: `https://tamtam-1p-diary.netlify.app/`,
		image: `img/OGP.png`,
		appleTouchIcon: `img/apple-touch-icon.png`,
		twitterUsername: `@hello_myscreate`
	},
  	pathPrefix: "/gatsby-contentful-starter",
	flags: {
		PRESERVE_WEBPACK_CACHE: true,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-transformer-remark",
		"gatsby-transformer-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-plugin-sitemap",
		{
		resolve: "gatsby-source-contentful",
		options: contentfulConfig,
		},
		{
		resolve: `gatsby-plugin-google-gtag`,
		options: {
			trackingIds: [
			"G-VSHNMBVW7B", // Google Analytics 4
			],
		},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /img/
				}
			}
		},
		{
		resolve: `gatsby-plugin-manifest`,
		options: {
					name: "たむたむのひとこと日記",
					short_name: "たむ日記",
					theme_color: "#000000",
					background_color: "#f8fc30",
					display: "standalone",
					orientation: "portrait",
					scope: "/",
					start_url: "/",
					icon: './static/img/apple-touch-icon.png',
			icon_options: {
			purpose: `maskable`,
			}
		},
		},
		'gatsby-plugin-offline'
	],
};
