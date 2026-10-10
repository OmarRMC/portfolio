import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');

const INICIO = '<!--CONTENIDO:INICIO-->';
const FIN = '<!--CONTENIDO:FIN-->';

const esc = s => String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function renderStack(stack) {
    return stack.map(t => `
            <figure class="img_tecnologia">
                <img src="${esc(t.url)}" alt="${esc(t.name)}" loading="lazy"/>
            </figure>`).join('');
}

function renderProyecto(p) {
    const linkWeb = p.url_web
        ? `<a href="${esc(p.url_web)}" target="_blank" rel="noopener">
          <span class="openProyect">
              <i class="fa-solid fa-up-right-from-square"></i>
          </span>
        </a>`
        : '';
    const linkGit = p.url_github
        ? `<a href="${esc(p.url_github)}" target="_blank" rel="noopener">
          <span class="openGit">
              <i class="fa-brands fa-github" aria-hidden="true"></i>
          </span>
        </a>`
        : '';

    return `
      <div class="contenedorCard startShowCard">
        <div class="cardProyecto">
        ${linkWeb}
        ${linkGit}
        <figure class="imgCard">
            <img src="${esc(p.image)}" alt="${esc(p.titulo)}" loading="lazy">
            <h2 class="tituloProyecto">${esc(p.titulo)}</h2>
        </figure>
        <div style="position: relative;">
            <div class="capa"></div>
            <main class="mainCard">
                <p class="descripcion">${p.Descripcion}</p>
            </main>
            <footer class="foorderCard">${renderStack(p.stack)}
            </footer>
        </div>
        </div>
      </div>`;
}

function renderCertificado(c) {
    return `
            <figure class="CardCertificado" data-title="${esc(c.descripcion)}" data-url="${esc(c.url)}">
                <img src="${esc(c.url)}" alt="${esc(c.alt)}" loading="lazy">
                <figcaption class="sr-only">${esc(c.descripcion)}</figcaption>
            </figure>`;
}

async function inyectar(archivo, html) {
    const ruta = path.join(pub, archivo);
    const actual = await fs.readFile(ruta, 'utf8');
    const inicioIdx = actual.indexOf(INICIO);
    const finIdx = actual.indexOf(FIN);
    if (inicioIdx === -1 || finIdx === -1) {
        throw new Error(`No se encontraron los marcadores ${INICIO} / ${FIN} en ${archivo}`);
    }
    const nuevo = actual.slice(0, inicioIdx + INICIO.length) + html + '\n' + actual.slice(finIdx);
    await fs.writeFile(ruta, nuevo);
    console.log('actualizado', archivo);
}

const proyectosJson = JSON.parse(await fs.readFile(path.join(pub, 'assets/js/datos/proyectos.json'), 'utf8'));
const certificadosJson = JSON.parse(await fs.readFile(path.join(pub, 'assets/js/datos/certificados.json'), 'utf8'));

const proyectosHtml = proyectosJson.listaProyectos.map(renderProyecto).join('\n');
const certificadosHtml = certificadosJson.lista_Certificados.map(renderCertificado).join('\n');

await inyectar('proyectos.html', proyectosHtml);
await inyectar('certificados.html', certificadosHtml);
