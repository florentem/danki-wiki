import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const base = process.env.GITHUB_ACTIONS ? '/danki-wiki/' : '/'

export default withMermaid(
  defineConfig({
    title: 'Danki Wiki',
    description: 'Modern, clean & minimalist documentation template built with VitePress',
    lang: 'ru-RU',
    base: base,

    // Автоматическая очистка названий вкладок браузера от лигатур иконок
    transformPageData(pageData) {
      if (pageData.title) {
        pageData.title = pageData.title.replace(/^[a-z0-9_]+\s+/, '').trim()
      }
    },

    head: [
      ['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%232d8a4e%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z%22/><polyline points=%223.27 6.96 12 12.01 20.73 6.96%22/><line x1=%2212%22 y1=%2222.08%22 x2=%2212%22 y2=%2212%22/></svg>' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }]
    ],

    themeConfig: {
      siteTitle: '<span class="material-symbols-outlined" style="vertical-align: -0.15em;">inventory_2</span> Danki Wiki',

      socialLinks: [
        { icon: 'discord', link: 'https://discord.gg/9eFuzA343a', ariaLabel: 'Discord' },
        {
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
          },
          link: 'https://dalink.to/florentemm',
          ariaLabel: 'Поддержать проект'
        }
      ],

      nav: [
        { text: 'Главная', link: '/' },
        { text: 'Общая информация', link: '/general/rules' },
        { text: 'Серверы и миры', link: '/servers/overview' },
        { text: 'Инструменты редстоуна', link: '/features/redstone-tools' },
        { text: 'Поддержка', link: '/donations/donations' }
      ],

      sidebar: [
        {
          text: 'Общая информация',
          collapsed: false,
          items: [
            { text: 'Правила сети', link: '/general/rules' },
            { text: 'Получение доступа', link: '/general/access' },
            { text: 'Подключение к серверу', link: '/general/connection' },
            { text: 'Формы заявок и обращений', link: '/general/requests' },
            { text: 'Вклад в проект', link: '/general/contributing' }
          ]
        },
        {
          text: 'Серверы и миры',
          collapsed: false,
          items: [
            { text: 'Обзор серверов', link: '/servers/overview' },
            { text: 'Сервер Лобби', link: '/servers/lobby' },
            { text: 'Сервер Комьюнити', link: '/servers/community' },
            { text: 'Сервер Редстоун', link: '/servers/redstone' },
            { text: 'Сервер Лихтенштейн', link: '/servers/circle' }
          ]
        },
        {
          text: 'Кастомизация и поддержка',
          collapsed: false,
          items: [
            { text: 'Покраски и баджи', link: '/donations/cosmetics' },
            { text: 'Финансирование и благодарности', link: '/donations/donations' }
          ]
        },
        {
          text: 'Дополнительно',
          collapsed: false,
          items: [
            { text: 'Инструменты сервера Редстоун', link: '/features/redstone-tools' },
            { text: 'Плагины и моды', link: '/features/features' }
          ]
        }
      ],

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: 'Поиск по базе знаний...',
                  buttonAriaLabel: 'Поиск'
                },
                modal: {
                  noResultsText: 'Ничего не найдено',
                  resetButtonTitle: 'Сбросить поиск',
                  footer: {
                    selectText: 'выбрать',
                    navigateText: 'навигация',
                    closeText: 'закрыть'
                  }
                }
              }
            }
          }
        }
      },

      footer: {
        message: 'НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ СЕРВИСОМ MINECRAFT. НЕ ОДОБРЕНО И НЕ СВЯЗАНО С MOJANG ИЛИ MICROSOFT.<br>Проект является независимым строительным сервером и не имеет отношения к официальным ресурсам и администрации Pepeland (<a href="https://www.pepeland.net" target="_blank" rel="noreferrer">pepeland.net</a>).',
        copyright: '© 2026'
      },

      docFooter: {
        prev: 'Назад',
        next: 'Вперед'
      },

      outline: {
        level: [2, 3],
        label: 'На этой странице'
      },

      darkModeSwitchLabel: 'Тема',
      lightModeSwitchTitle: 'Переключить на светлую тему',
      darkModeSwitchTitle: 'Переключить на темную тему',
      sidebarMenuLabel: 'Меню',
      returnToTopLabel: 'Наверх'
    },

    mermaid: {
      theme: 'default'
    }
  })
)
