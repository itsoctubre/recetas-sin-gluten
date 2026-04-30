const sharp = require("sharp");
const fs = require("fs/promises");
const path = require("path");

const carpetaEntrada = path.join(__dirname, "src", "assets");
const carpetaSalida = path.join(__dirname, "src", "assets", "optimizadas");

const imagenes = [
  "001.jfif",
  "002.jpeg",
  "003.jfif",
  "004.jpg",
  "005.jfif",
  "006.jpg",
  "007.jpg",
  "008.jpg",
  "009.jpg",
  "010.jpg",
  "011.jpg",
  "012.jpg",
  "013.jpg",
  "014.jpg",
  "015.jfif",
  "016.jfif",
  "017.jfif",
];

async function optimizarImagenes() {
  await fs.mkdir(carpetaSalida, { recursive: true });

  // Versiones responsive de la imagen de portada (resolution switching por tamaño)
  await sharp(path.join(carpetaEntrada, "001.jfif"))
    .resize({ width: 320 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "001-320.webp"));

  await sharp(path.join(carpetaEntrada, "001.jfif"))
    .resize({ width: 640 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "001-640.webp"));

  await sharp(path.join(carpetaEntrada, "001.jfif"))
    .resize({ width: 840 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "001-840.webp"));

  console.log("Versiones responsive de portada creadas.");

  // Versiones responsive de la imagen del footer (resolution switching por densidad de píxeles)
  await sharp(path.join(carpetaEntrada, "002.jpeg"))
    .resize({ width: 95, height: 95, fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "002-95.webp"));

  await sharp(path.join(carpetaEntrada, "002.jpeg"))
    .resize({ width: 190, height: 190, fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "002-190.webp"));

  console.log("Versiones responsive del footer creadas.");

  // Versiones responsive de las imágenes de categoría (resolution switching por tamaño)
  await sharp(path.join(carpetaEntrada, "003.jfif"))
    .resize({ width: 340 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "003-340.webp"));

  await sharp(path.join(carpetaEntrada, "003.jfif"))
    .resize({ width: 680 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "003-680.webp"));

  await sharp(path.join(carpetaEntrada, "004.jpg"))
    .resize({ width: 340 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "004-340.webp"));

  await sharp(path.join(carpetaEntrada, "004.jpg"))
    .resize({ width: 680 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "004-680.webp"));

  await sharp(path.join(carpetaEntrada, "005.jfif"))
    .resize({ width: 340 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "005-340.webp"));

  await sharp(path.join(carpetaEntrada, "005.jfif"))
    .resize({ width: 680 })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "005-680.webp"));

  console.log("Versiones responsive de categoría creadas.");

  // =========================
  // DIRECCIÓN DE ARTE - DET2
  // =========================

  // Móvil
  await sharp(path.join(carpetaEntrada, "003.jfif"))
    .resize({
      width: 480,
      height: 620,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "003-detalle-mobile.webp"));

  // Tablet
  await sharp(path.join(carpetaEntrada, "003.jfif"))
    .resize({
      width: 760,
      height: 680,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "003-detalle-tablet.webp"));

  console.log("Versiones de dirección de arte de det2 creadas.");

  // =========================
  // DIRECCIÓN DE ARTE - DET3
  // =========================

  // Móvil
  await sharp(path.join(carpetaEntrada, "004.jpg"))
    .resize({
      width: 480,
      height: 620,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "004-detalle-mobile.webp"));

  // Tablet
  await sharp(path.join(carpetaEntrada, "004.jpg"))
    .resize({
      width: 760,
      height: 680,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "004-detalle-tablet.webp"));

  console.log("Versiones de dirección de arte de det3 creadas.");

  // =========================
  // DIRECCIÓN DE ARTE - DET4
  // =========================

  // Móvil
  await sharp(path.join(carpetaEntrada, "005.jfif"))
    .resize({
      width: 480,
      height: 620,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "005-detalle-mobile.webp"));

    // Tablet
  await sharp(path.join(carpetaEntrada, "005.jfif"))
    .resize({
      width: 760,
      height: 760,
      fit: "cover",
      position: "center",
    })
    .webp({ quality: 80 })
    .toFile(path.join(carpetaSalida, "005-detalle-tablet.webp"));

  console.log("Versiones de dirección de arte de det4 creadas.");

  // Optimización general de todas las imágenes a WebP
  for (const imagen of imagenes) {
    const rutaEntrada = path.join(carpetaEntrada, imagen);
    const nombreSinExtension = path.parse(imagen).name;
    const rutaSalida = path.join(carpetaSalida, `${nombreSinExtension}.webp`);

    await sharp(rutaEntrada)
      .webp({ quality: 80 })
      .toFile(rutaSalida);

    console.log(`Optimizada: ${imagen} → ${nombreSinExtension}.webp`);
  }

  console.log("Todas las imágenes se han optimizado correctamente.");
}

optimizarImagenes().catch((error) => {
  console.error("Error al optimizar las imágenes:", error);
});