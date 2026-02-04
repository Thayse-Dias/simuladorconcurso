📦 Parte 1 — Nome do cache e arquivos
```bash
const CACHE_NAME = "simulado-cache-v2";
```

- É o nome + versão do cache
- Quando você muda para v3, v4…
👉 o navegador entende que o site foi atualizado

---

```bash
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./js/questions.js"
];
```
- Lista dos arquivos essenciais do site

- Esses arquivos ficam salvos no navegador

- Permite o site abrir rápido e até offline

---

⚙️ Parte 2 — Instalação
```bash
self.addEventListener("install", event => {
```
- Executa quando o site é acessado pela primeira vez

- Ou quando o cache muda de versão

```bash
cache.addAll(FILES_TO_CACHE);
```
- Salva todos os arquivos da lista no cache

```bash
self.skipWaiting();
```
- Faz o site usar a versão nova imediatamente

- Sem precisar fechar o navegador

---

🔄 Parte 3 — Ativação (limpeza)
```bash
self.addEventListener("activate", event => {
```
- Roda quando o novo cache entra em ação

```bash
if (key !== CACHE_NAME) {
  caches.delete(key);
}
```
- Apaga cache antigo

- Evita bugs e versões desatualizadas

```bash
self.clients.claim();
```
- Força todas as abas abertas a usar o site novo

---

🌐 Parte 4 — Uso do cache
```bash
self.addEventListener("fetch", event => {
```
- Executa toda vez que o site pede um arquivo

```bash
return response || fetch(event.request);
```
- Se existir no cache 👉 usa

- Se não existir 👉 baixa da internet

---

⭐ Qual a importância no seu projeto?

✔ Site carrega mais rápido
✔ Funciona offline ou com internet ruim
✔ Evita bugs de versão antiga
✔ Garante que o deploy do GitHub Pages funcione corretamente
✔ Comportamento igual ao localhost

---

🧩 Resumo em uma frase

Esse código garante que o simulador carregue rápido, funcione offline e sempre use a versão correta do site após cada atualização.

