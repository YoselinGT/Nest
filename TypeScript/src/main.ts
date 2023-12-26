import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {name} from './bases/01-type.ts'
import {pokemons} from './bases/02-object.ts'
//import {pikachu} from './bases/03-classes.ts'
//import {pikachu} from './bases/04-injection.ts'
//import {pikachu} from './bases/05-decorators.ts'
import {pikachu} from './bases/06-decorators-deprecate.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>Hola ${name} ${pokemons.join(',')}</h2>
    <h3>${pikachu.id}</h3>
    <h3>${pikachu.name}</h3>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
