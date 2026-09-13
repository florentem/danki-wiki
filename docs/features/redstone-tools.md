# <span class="material-symbols-outlined">precision_manufacturing</span> Инструменты сервера Редстоун

Редстоун-сервер работает на Paper исключительно ради паритета механик с [Pepeland](https://www.pepeland.net). Привычные технические моды вроде [Carpet](https://modrinth.com/project/TQTTVgYE), [Servux](https://modrinth.com/project/zQhsx8KF) или [ChunkDebug](https://modrinth.com/project/zQxjhDPq) не имеют полноценных плагинов из-за ограничений Paper API, поэтому нужный инструментал мы собирали по кусочкам: часть перенесли из форков ядра и плагинов, а недостающее навайбкодили своими патчами.

::: warning Экспериментальный функционал
Этот функционал чертовски экспериментальный, поэтому местами может ломаться. со временем будем стараться улучшать и исправлять найденные баги, используйте на свой страх и риск, если нашли проблему - сообщайте через [тикеты](../general/requests.md) или лично в Discord (`@noosb`).
:::

---

## <span class="material-symbols-outlined">smart_toy</span> Функции Carpet

### Боты (`/player`)
* **Автовозрождение**: `/player <бот> respawn on|off` — при включении бот возрождается на точке спавна через секунду после гибели.
* **Режим призрака**: `/player <бот> ghost` — бот находится в мире, но исключается из симуляции (не спавнит мобов и не занимает мобкап).

### Счётчики воронок (`/counter`)
* `/counter scan [радиус]` (по умолчанию 16 блоков) — ручная регистрация уже установленных воронок в шерсть (новые воронки подхватываются автоматически).

---

## <span class="material-symbols-outlined">monitoring</span> Мониторинг в таб-листе (`/log`)

* `/log tps`, `/log mspt`, `/log mobcaps`, `/log counter`, `/log spawn`, `/log clear`, `/log microtiming`, `movement`, `item`, `clear`

---

## <span class="material-symbols-outlined">tune</span> Правила сервера (`/carpet`)

* `hopperCountersUnlimitedSpeed` (по умолчанию `false`) — снятие задержки с хоппер каунтеров для замера высокоскоростных ферм.
* `fillUpdates`, `blockUpdates`, `hardcodeTNTangle`, `tntRandomRange`, `hardcodeItemDrops`, `microTiming`

---

## <span class="material-symbols-outlined">terminal</span> Прочие команды Carpet

* `/perimeterinfo`, `/distance`, `/info`

---

## <span class="material-symbols-outlined">timer</span> Управление временем и тиковые зоны (`/tick`, `/zone`)

### Команда `/tick`
* `/tick toggle` — остановка хода времени и запуск при повторном вводе команды.

### Отдельные зоны тиков (`/tick zone` или `/zone`)
Позволяют заморозить или настроить скорость времени в отдельных чанках вместо всего мира. Зона оперирует **целыми чанками** от дна до неба мира.

```bash [Команды управления зонами]
/tick zone create <имя>                  # создать зону (сразу берётся в фокус)
/tick zone box add                       # выбор углов снежком (ЛКМ — первый, ПКМ — второй)
/tick zone box add <x1 y1 z1> <x2 y2 z2> # добавить область по координатам
/tick zone highlight                     # подсветка границ зоны
/tick zone focus <имя> | unfocus         # переключить /tick, /log tps и mspt на эту зону
/tick zone member add|remove <игрок>     # выдать права на зону соавторам
/tick zone resync                        # синхронизация таймингов при зависании механизмов
```

::: warning Стык зон
Не стройте механизмы на стыке зон: из-за рассинхронизации они легко могут сломаться.
:::

---

## <span class="material-symbols-outlined">handyman</span> Вспомогательные утилиты

* `/ghost` — скрытый режим наблюдателя (игрок может летать, строить и открывать контейнеры, но не прогружает чанки, не занимает мобкап, не агрит мобов и невидим для других).
* `/labspawn` — подробная статистика отказов и успешных попыток спавнера мобов по категориям.
* `/labchunks hello` — активация передачи статусов чанков для клиентского мода **ChunkDebug** (по клавише `F6`).

---

## <span class="material-symbols-outlined">extension</span> Интеграция с модами

Все инструменты сервера полностью поддерживают ванильный клиент. Сторонние моды ставятся по желанию:
* **[Litematica](https://modrinth.com/project/bEpr0Arc)** — вставка схематик напрямую через сервер (в конфигурации мода обязательно включите `entityDataSync`). [Servux](https://modrinth.com/project/zQhsx8KF) на сервере уже встроен.
* **[MiniHUD](https://modrinth.com/project/UMxybHE8)** — оверлеи структур, мобкапов и хитбоксов. Для передачи некоторых строк необходимо включить `hudDataSync` во вкладке Generic.
* **[ChunkDebug](https://modrinth.com/project/zQxjhDPq)** — карта загрузки чанков по `F6` (требует предварительного ввода `/labchunks hello`).
* **[Capture & Playback](https://modrinth.com/project/Ebec9fX9)** — графический таймлайн для монтажа и редактирования редстоун-сигналов.

---

> **НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ СЕРВИСОМ MINECRAFT. НЕ ОДОБРЕНО И НЕ СВЯЗАНО С MOJANG ИЛИ MICROSOFT.**  
> Проект является независимым строительным сервером и не имеет отношения к официальным ресурсам и администрации Pepeland ([pepeland.net](https://www.pepeland.net)).
