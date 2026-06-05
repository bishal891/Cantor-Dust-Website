/** Local site media (served from /public/assets). Run `node scripts/download-assets.mjs` to refresh. */

const asset = (path) => `/assets/${path}`;

function repeatLogos(logos, times = 3) {
  return Array.from({ length: times }, () => logos).flat();
}

const privateSectorLogos = [
  asset('logos/private/01.png'),
  asset('logos/private/02.png'),
  asset('logos/private/03.png'),
  asset('logos/private/04.png'),
  asset('logos/private/05.png'),
  asset('logos/private/06.png'),
  asset('logos/private/07.png'),
  asset('logos/private/08.png'),
];

const developmentBaseLogos = [
  asset('logos/development/01.png'),
  asset('logos/development/02.png'),
  asset('logos/development/03.png'),
  asset('logos/development/04.png'),
];

/** Repeat set so marquee spacing stays even with only four orgs */
export const developmentLogos = repeatLogos(developmentBaseLogos, 3);
export { privateSectorLogos };

export const media = {
  logo: asset('logo.png'),
  homeWhoWeAreVideo: asset('home/who-we-are.mp4'),
  homeWhoWeArePoster: asset('home/who-we-are-poster.jpg'),
  founder: asset('about/founder.jpg'),
  prijesh: asset('about/prijesh.jpg'),
  khem: asset('about/khem.jpeg'),
  diwas: asset('about/diwas.jpeg'),
  sagar: asset('about/sagar.jpeg'),
  roshan: asset('about/roshan.jpg'),
  bishal: asset('about/bishal.png'),
  insightHydropower: asset('insights/hydropower.jpeg'),
  insightVehicleTax: asset('insights/vehicle-tax.png'),
  physicalAnnotation: asset('physical/annotation.jpg'),
  physicalAnnotationExample: asset('physical/annotation-example.jpg'),
  physicalExampleVideo: asset('physical/example.mp4'),
  physicalExampleVideoPoster: asset('physical/example-poster.jpg'),
};
