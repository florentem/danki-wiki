import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    const formatOutlineIcons = () => {
      nextTick(() => {
        // Находим все ссылки в правом оглавлении (Table of Contents)
        document.querySelectorAll('.outline-link').forEach((el) => {
          const rawText = el.textContent?.trim() || ''
          const match = rawText.match(/^([a-z0-9_]+)\s+(.+)$/)
          if (match && !el.querySelector('.material-symbols-outlined')) {
            const iconName = match[1]
            const titleText = match[2]
            el.innerHTML = `<span class="material-symbols-outlined" style="font-size: 1.1em; vertical-align: -0.15em; margin-right: 0.35rem; display: inline-block;">${iconName}</span>${titleText}`
          }
        })
      })
    }

    onMounted(formatOutlineIcons)
    watch(() => route.path, formatOutlineIcons)
  }
}
