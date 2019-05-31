module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/VuepressBlogTemplate/",
  markdown: {
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  },
  locales: {
    "/": {
      lang: "zh-CN",
      title: "MyBatis-Plus",
      description: "为简化开发而生"
    },
    "/en/": {
      lang: "en-US",
      title: "MyBatis-Plus",
      description: "Born To Simplify Development"
    }
  },
  head: [
    ["link", {
      rel: "icon",
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    repo: "Sogrey/VuepressBlogTemplate",
    docsRepo: "Sogrey/VuepressBlogTemplate",
    editLinks: true,
    docsDir: 'source',
    locales: {
      "/": {
        label: "简体中文",
        selectText: "选择语言",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [{
            text: "指南",
            link: "/guide/"
          },
          {
            text: "配置",
            link: "/config/"
          },
          {
            text: "生态",
            items: [{
                text: "百度",
                link: "https://www.baidu.com"
              },
              {
                text: "淘宝",
                link: "http://www.taobao.com"
              },
              {
                text: "爱奇艺",
                link: "http://www.iqiyi.com/"
              }
            ]
          }
        ],
        sidebar: {
          "/guide/": genGuideSidebar(true),
          "/config/": genConfigSidebar(true)
        }
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [{
            text: "Guide",
            link: "/en/guide/"
          },
          {
            text: "Config",
            link: "/en/config/"
          },
          {
            text: "Ecosystem",
            items: [{
              text: "Baidu",
              link: "https://www.baidu.com"
            },
            {
              text: "Taobao",
              link: "http://www.taobao.com"
            },
            {
              text: "Iqiyi",
              link: "http://www.iqiyi.com/"
              }
            ]
          }
        ],
        sidebar: {
          "/en/guide/": genGuideSidebar(false),
          "/en/config/": genConfigSidebar(false)
        }
      }
    }
  }
};

function genGuideSidebar(isZh) {
  return [{
      title: isZh ? "快速入门" : "Getting Start",
      collapsable: false,
      children: ["", "quick-start"]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: ["generator"]
    }
  ]
}

function genConfigSidebar(isZh) {
  return [{
    title: isZh ? "配置" : "Config",
    collapsable: false,
    children: [""]
  }]
}