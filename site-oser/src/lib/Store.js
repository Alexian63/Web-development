const store = {};

export function saveEvent(slug, data) {
  store[slug] = data;
}

export function getEvent(slug) {
  return store[slug];
}
