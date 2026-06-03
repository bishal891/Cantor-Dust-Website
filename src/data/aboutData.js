import aboutJson from './aboutData.json';
import { media } from './wixMedia';

function resolveImage(imageKey) {
  if (!imageKey) return '';
  return media[imageKey] ?? imageKey;
}

/** `links` object: key = button label, value = URL */
function resolveLinks(links) {
  if (!links || typeof links !== 'object' || Array.isArray(links)) {
    return [];
  }

  return Object.entries(links)
    .map(([label, href]) => ({
      label: String(label).trim(),
      href: typeof href === 'string' ? href.trim() : '',
    }))
    .filter((entry) => entry.label && entry.href);
}

function resolveItem(item) {
  const portfolio = item.portfolio?.trim() || null;
  const linkedin = item.linkedin?.trim() || null;

  return {
    ...item,
    image: resolveImage(item.image),
    layout: item.layout ?? {},
    text: Array.isArray(item.text) ? item.text : [],
    linkButtons: resolveLinks(item.links),
    portfolio,
    linkedin,
  };
}

function resolveSection(section) {
  const items = (section.items ?? []).map(resolveItem);
  const groups = (section.groups ?? []).map((group) => ({
    ...group,
    items: (group.items ?? []).map(resolveItem),
  }));

  return {
    ...section,
    items,
    groups: groups.length > 0 ? groups : undefined,
  };
}

function resolveCategory(category) {
  return {
    ...category,
    sections: (category.sections ?? []).map(resolveSection),
  };
}

/** About page content — edit aboutData.json to add people, links, and copy. */
export const aboutCategories = aboutJson.categories.map(resolveCategory);
