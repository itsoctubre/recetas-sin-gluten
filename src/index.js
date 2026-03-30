import {
  createIcons,
  Sparkles,
  Wheat,
  BookOpen,
  Link2,
  Play,
  Image,
} from "lucide";

createIcons({
  icons: {
    Sparkles,
    Wheat,
    BookOpen,
    Link2,
    Play,
    Image,
  },
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const activePages = {
  "categoria.html": "categoria.html",
  "det1.html": "det1.html",
  "det2.html": "det2.html",
  "links.html": "links.html",
};

const headerLinks = document.querySelectorAll(".header-link");

headerLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").replace(/^\.\//, "").replace(/^\//, "");

  if (activePages[currentPage] === linkPage) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

const botonesReceta = document.querySelectorAll(".receta-boton");

botonesReceta.forEach((boton) => {
  boton.addEventListener("click", () => {
    const panelId = boton.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const abierto = boton.getAttribute("aria-expanded") === "true";

    boton.setAttribute("aria-expanded", String(!abierto));
    panel.hidden = abierto;

    if (abierto) {
      boton.textContent = "Ver dificultad y tiempo";
    } else {
      boton.textContent = "Ocultar dificultad y tiempo";
    }
  });
});

const botonesDetalle = document.querySelectorAll(".detalle-boton");

botonesDetalle.forEach((boton) => {
  boton.addEventListener("click", () => {
    const panelId = boton.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const abierto = boton.getAttribute("aria-expanded") === "true";
    const esIngredientes = panelId.includes("ingredientes");

    boton.setAttribute("aria-expanded", String(!abierto));
    panel.hidden = abierto;

    if (abierto) {
      boton.textContent = esIngredientes
        ? "Ver ingredientes"
        : "Ver elaboración";
    } else {
      boton.textContent = esIngredientes
        ? "Ocultar ingredientes"
        : "Ocultar elaboración";
    }
  });
});

const botonesGaleria = document.querySelectorAll(".galeria-boton");
const visorImagen = document.querySelector(".visor-imagen");
const visorImg = document.querySelector(".visor-imagen__img");
const cerrarVisor = document.querySelector(".visor-imagen__cerrar");
const fondoVisor = document.querySelector(".visor-imagen__fondo");

if (
  botonesGaleria.length > 0 &&
  visorImagen &&
  visorImg &&
  cerrarVisor &&
  fondoVisor
) {
  const abrirImagen = (boton) => {
    const miniatura = boton.querySelector("img");

    if (!miniatura) return;

    visorImg.src = miniatura.getAttribute("src");
    visorImg.alt = miniatura.getAttribute("alt");
    visorImagen.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const cerrarImagen = () => {
    visorImagen.hidden = true;
    visorImg.removeAttribute("src");
    visorImg.alt = "";
    document.body.style.overflow = "";
  };

  botonesGaleria.forEach((boton) => {
    boton.addEventListener("click", () => {
      abrirImagen(boton);
    });
  });

  cerrarVisor.addEventListener("click", cerrarImagen);
  fondoVisor.addEventListener("click", cerrarImagen);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !visorImagen.hidden) {
      cerrarImagen();
    }
  });
}