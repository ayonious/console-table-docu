module.exports = {
  title: "Console Table Printer", // Title for your website.
  tagline: "A tool to print colorful table on your console",
  url: "https://console-table.netlify.app", // Your website URL
  baseUrl: "/", // Base URL for your project */

  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "support",
      content:
        '⭐️ If you like Console Table Printer, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ayonious/console-table-printer">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "Console Table Printer",
      logo: {
        alt: "CTP",
        src: "img/logo.ico",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/ayonious/console-table-printer",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.npmjs.com/package/console-table-printer",
          label: "npmjs",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Quick Start",
              to: "docs/doc-install-quick-start",
            },
            {
              label: "Getting Started With CLI",
              to: "docs/doc-cli-install-quick-start",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nahiyan. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          homePageId: "doc1",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // this enabled the edit button for documentation
          editUrl:
            "https://github.com/ayonious/console-table-docu/blob/master/",
        },
      },
    ],
  ],
};
