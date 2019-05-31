module.exports = {
  port: "3000",
  dest: "docs",
  ga: "UA-85414008-1",
  base: "/VuepressBlogEdit2/",
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
    repo: "Sogrey/VuepressBlogEdit2",
    docsRepo: "Sogrey/VuepressBlogEdit2",
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
                text: "Kisso 单点登录",
                link: "https://gitee.com/baomidou/kisso"
              },
              {
                text: "Lock4j 分布式锁",
                link: "https://gitee.com/baomidou/lock4j-spring-boot-starter"
              },
              {
                text: "Dynamic Datasource 动态数据源",
                link: "https://github.com/baomidou/dynamic-datasource-spring-boot-starter"
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
                text: "Kisso",
                link: "https://gitee.com/baomidou/kisso"
              },
              {
                text: "Lock4j",
                link: "https://gitee.com/baomidou/lock4j-spring-boot-starter"
              },
              {
                text: "Dynamic Datasource",
                link: "https://github.com/baomidou/dynamic-datasource-spring-boot-starter"
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