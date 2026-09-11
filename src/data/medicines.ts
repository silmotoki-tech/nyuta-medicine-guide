export type Medicine = {
  slug: string;
  productName: string;
  listName: string;
  genericName: string;
  reading: string;
};

export const medicines: Medicine[] = [
  {
    slug: 'apoquel',
    productName: 'アポキル',
    listName: 'アポキル',
    genericName: '準備中',
    reading: 'あぽきる',
  },
  {
    slug: 'cerenia',
    productName: 'セレニア',
    listName: 'セレニア（マロピタント）',
    genericName: 'マロピタント',
    reading: 'せれにあ',
  },
  {
    slug: 'famciclovir',
    productName: 'ファムシクロビル',
    listName: 'ファムシクロビル',
    genericName: '準備中',
    reading: 'ふぁむしくろびる',
  },
];

const kanaRows: { label: string; chars: string }[] = [
  { label: 'あ行', chars: 'あいうえおぁぃぅぇぉ' },
  { label: 'か行', chars: 'かきくけこがぎぐげご' },
  { label: 'さ行', chars: 'さしすせそざじずぜぞ' },
  { label: 'た行', chars: 'たちつてとだぢづでど' },
  { label: 'な行', chars: 'なにぬねの' },
  { label: 'は行', chars: 'はひふへほばびぶべぼぱぴぷぺぽ' },
  { label: 'ま行', chars: 'まみむめも' },
  { label: 'や行', chars: 'やゆよゃゅょ' },
  { label: 'ら行', chars: 'らりるれろ' },
  { label: 'わ行', chars: 'わをん' },
];

function compareReading(a: Medicine, b: Medicine): number {
  return a.reading.localeCompare(b.reading, 'ja');
}

export const medicinesByReading = [...medicines].sort(compareReading);

export function medicinesByExistingKanaRows() {
  return kanaRows
    .map((row) => ({
      label: row.label,
      medicines: medicinesByReading.filter((medicine) =>
        row.chars.includes(medicine.reading.charAt(0))
      ),
    }))
    .filter((row) => row.medicines.length > 0);
}

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
