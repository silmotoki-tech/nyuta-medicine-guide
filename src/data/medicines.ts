export type Medicine = {
  slug: string;
  productName: string;
  listName: string;
  genericName: string;
};

export const medicines: Medicine[] = [
  {
    slug: 'apoquel',
    productName: 'アポキル',
    listName: 'アポキル',
    genericName: '準備中',
  },
  {
    slug: 'cerenia',
    productName: 'セレニア',
    listName: 'セレニア（マロピタント）',
    genericName: 'マロピタント',
  },
  {
    slug: 'famciclovir',
    productName: 'ファムシクロビル',
    listName: 'ファムシクロビル',
    genericName: '準備中',
  },
];

function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const suffix = path.replace(/^\//, '');
  return `${base}/${suffix}`;
}

export function homePath(): string {
  return withBase('/');
}

export function medicinePath(slug: string): string {
  return withBase(`medicines/${slug}/`);
}
